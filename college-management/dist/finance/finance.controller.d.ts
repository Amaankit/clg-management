import { FinanceService } from './finance.service';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
export declare class FinanceController {
    private readonly financeService;
    constructor(financeService: FinanceService);
    create(createFinanceDto: CreateFinanceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFinanceDto: UpdateFinanceDto): string;
    remove(id: string): string;
}
