import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectsParamsDto } from './dto/subject.params.dto';
import { User } from '../user/interface/user.interface';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    create(createSubjectDto: CreateSubjectDto): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        external_marks: number;
        internal_marks: number;
        internal_prac_marks: number;
        external_prac_marks: number;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
    }>;
    findAll(query: SubjectsParamsDto, user: User): Promise<import("../common/pagination/paginator").PaginatedResult<{
        id: number;
        code: string;
        name: string;
        description: string;
        external_marks: number;
        internal_marks: number;
        internal_prac_marks: number;
        external_prac_marks: number;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
    }[]>>;
    findOne(id: string, user: User): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        external_marks: number;
        internal_marks: number;
        internal_prac_marks: number;
        external_prac_marks: number;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
    }>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        external_marks: number;
        internal_marks: number;
        internal_prac_marks: number;
        external_prac_marks: number;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
    }>;
}
