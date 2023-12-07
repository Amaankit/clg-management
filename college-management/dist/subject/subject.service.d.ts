import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectsParamsDto } from './dto/subject.params.dto';
import { PrismaService } from '../database/database.service';
import { Subject } from '.prisma/client';
import { PaginatedResult } from '../common/pagination/paginator';
export declare class SubjectService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    findAll(query: SubjectsParamsDto, usergroup: string): Promise<PaginatedResult<Subject[]>>;
    findOne(id: number, usergroup: string): Promise<Subject>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
}
