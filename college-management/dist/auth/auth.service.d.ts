import { PrismaService } from '../database/database.service';
import { LoginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse } from './dto/auth-response.dto';
import { CreateUserDto } from './dto/register-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly prismaService;
    private jwtService;
    private readonly usersService;
    constructor(prismaService: PrismaService, jwtService: JwtService, usersService: UserService);
    login(loginDto: LoginDto): Promise<AuthResponse>;
    register(createUserDto: CreateUserDto): Promise<AuthResponse>;
}
