import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { BatchParamsDto } from './dto/batch.params.dto';
import { PrismaService } from '../database/database.service';
import { Batch } from '.prisma/client';
import { PaginatedResult } from '../common/pagination/paginator';
export declare class BatchService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createBatchDto: CreateBatchDto): Promise<Batch>;
    findAll(query: BatchParamsDto, usergroup: string): Promise<PaginatedResult<Batch[]>>;
    findOne(id: number, usergroup: string): Promise<Batch>;
    update(id: number, updateBatchDto: UpdateBatchDto): Promise<Batch>;
    remove(id: number): string;
}
