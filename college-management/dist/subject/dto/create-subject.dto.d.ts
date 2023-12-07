export declare class CreateSubjectDto {
    code: string;
    name: string;
    description?: string;
    external_marks?: number;
    internal_marks?: number;
    internal_prac_marks?: number;
    external_prac_marks?: number;
    is_active?: boolean;
    batches?: number[];
}
