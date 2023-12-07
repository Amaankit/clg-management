import { BatchService } from './batch.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { BatchParamsDto } from './dto/batch.params.dto';
import { User } from '../user/interface/user.interface';
export declare class BatchController {
    private readonly batchService;
    constructor(batchService: BatchService);
    create(createBatchDto: CreateBatchDto): Promise<{
        id: number;
        name: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(query: BatchParamsDto, user: User): Promise<import("../common/pagination/paginator").PaginatedResult<{
        id: number;
        name: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>>;
    findOne(id: string, user: User): Promise<{
        id: number;
        name: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateBatchDto: UpdateBatchDto): Promise<{
        id: number;
        name: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): string;
}
