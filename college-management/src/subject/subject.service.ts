import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectsParamsDto } from './dto/subject.params.dto';
import { PrismaService } from '../database/database.service';
import { Subject } from '.prisma/client';
import { paginate, orderBy } from '../common/constants/constants';
import { PaginatedResult } from '../common/pagination/paginator';
import { subjectIncludes } from './subject.utils';

@Injectable()
export class SubjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const existing = await this.prismaService.subject.findUnique({
      where: { code: createSubjectDto.code },
    });
    if (existing) {
      throw new ConflictException('Subject with this code is already exists. ');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { batches, ...createSubject } = createSubjectDto;
    const subject = await this.prismaService.subject.create({
      data: {
        ...createSubject,
        batches: {
          connect: batches?.map((batchId) => ({ id: batchId })),
        },
      },
    });
    return subject;
  }

  async findAll(
    query: SubjectsParamsDto,
    usergroup: string,
  ): Promise<PaginatedResult<Subject[]>> {
    const where: any = {};
    const name = query.name;
    const code = query.code;
    const isActive = query.is_active;
    const batches = query.batches;
    const page = query.page || 1;
    if (batches) {
      where.batches = {
        some: {
          id: {
            in: batches.split(',').map(Number),
          },
        },
      };
    }
    if (name) {
      where.name = { contains: name, mode: 'insensitive' };
    }
    if (code) {
      where.code = code;
    }
    if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
      where.is_active = true;
    } else if (isActive !== undefined) {
      where.is_active = isActive;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return paginate(
      this.prismaService.subject,
      {
        where,
        orderBy,
        include: subjectIncludes,
      },
      {
        page,
      },
    );
  }

  async findOne(id: number, usergroup: string): Promise<Subject> {
    const whereClause: any = { id };
    if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
      whereClause.is_active = true;
    }
    const subject = await this.prismaService.subject.findFirst({
      where: whereClause,
    });
    if (!subject) {
      throw new NotFoundException();
    }
    return subject;
  }

  async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const existing = await this.prismaService.subject.findFirst({
      where: {
        code: updateSubjectDto.code,
        NOT: {
          id: id,
        },
      },
    });
    if (existing) {
      throw new ConflictException('Subject with this name is already exists. ');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { batches, ...updateSubject } = updateSubjectDto;
    const subject = await this.prismaService.subject.update({
      where: { id },
      data: {
        ...updateSubject,
        batches: {
          connect: batches?.map((batchId) => ({ id: batchId })),
        },
      },
    });
    return subject;
  }
}
