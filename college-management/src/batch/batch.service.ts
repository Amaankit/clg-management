import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { BatchParamsDto } from './dto/batch.params.dto';
import { PrismaService } from '../database/database.service';
import { Batch } from '.prisma/client';
import { paginate, orderBy } from '../common/constants/constants';
import { PaginatedResult } from '../common/pagination/paginator';

@Injectable()
export class BatchService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBatchDto: CreateBatchDto): Promise<Batch> {
    const existing = await this.prismaService.batch.findUnique({
      where: { name: createBatchDto.name },
    });
    if (existing) {
      throw new ConflictException('Batch with this name is already exists. ');
    }
    const batch = await this.prismaService.batch.create({
      data: {
        name: createBatchDto.name,
      },
    });
    return batch;
  }

  async findAll(
    query: BatchParamsDto,
    usergroup: string,
  ): Promise<PaginatedResult<Batch[]>> {
    const where: any = {};
    const name = query.name;
    const isActive = query.is_active;
    const page = query.page || 1;

    if (name) {
      where.name = { contains: name, mode: 'insensitive' };
    }
    if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
      where.is_active = true;
    } else if (isActive !== undefined) {
      where.is_active = isActive;
    }
    return paginate(
      this.prismaService.batch,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async findOne(id: number, usergroup: string): Promise<Batch> {
    const whereClause: any = { id };
    if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
      whereClause.is_active = true;
    }
    const batch = await this.prismaService.batch.findFirst({
      where: whereClause,
    });
    if (!batch) {
      throw new NotFoundException();
    }
    return batch;
  }

  async update(id: number, updateBatchDto: UpdateBatchDto): Promise<Batch> {
    const existing = await this.prismaService.batch.findFirst({
      where: {
        name: updateBatchDto.name,
        NOT: {
          id: id,
        },
      },
    });
    if (existing) {
      throw new ConflictException('Batch with this name is already exists. ');
    }
    const batch = await this.prismaService.batch.update({
      where: { id },
      data: updateBatchDto,
    });
    return batch;
  }

  remove(id: number) {
    return `This action removes a #${id} batch`;
  }
}
