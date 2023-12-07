import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { User } from '.prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './../auth/dto/register-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(username: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException();
    }

    delete user.password;
    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const whereConditions = {
      OR: [
        {
          email: data.email,
        },
        {
          username: data.username,
        },
        {
          phonenumber: data.phonenumber,
        },
      ],
    };

    const existing = await this.prismaService.user.findFirst({
      where:
        data.email && data.email.length
          ? whereConditions
          : {
              OR: [
                {
                  username: data.username,
                },
                {
                  phonenumber: data.phonenumber,
                },
              ],
            },
    });

    if (existing) {
      throw new ConflictException('User With this details are already Exists');
    }

    const hashedPassword = await bcrypt.hash(
      data.password,
      bcrypt.genSaltSync(),
    );
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword,
        usergroup: 'STUDENT',
        is_active: true,
        updated_at: new Date(),
        uuid: uuidv4(),
      },
    });

    delete user.password;
    return user;
  }
}
