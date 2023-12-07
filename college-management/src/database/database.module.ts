import { Module } from '@nestjs/common';
import { PrismaService } from './database.service';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
