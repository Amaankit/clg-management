export declare class CreateFeesDTO {
    type: string;
    amount: number;
}
export declare class UpdateAttendanceDTO {
    status: string;
}
declare const UpdateFeesDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFeesDTO>>;
export declare class UpdateFeesDTO extends UpdateFeesDTO_base {
}
export {};
