import { PrismaService } from '../database/database.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    validate(payload: any): Promise<{
        password: string;
        last_login: Date;
        created_at: Date;
        updated_at: Date;
        uuid: string;
        username: string;
        email: string;
        is_active: boolean;
        phonenumber: string;
        usergroup: import(".prisma/client").$Enums.UserGroup;
        fullname: string;
    }>;
}
export {};
