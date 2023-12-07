import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { PrismaService } from '../database/database.service';

@Module({
  controllers: [BatchController],
  providers: [BatchService, PrismaService],
  exports: [BatchService],
})
export class BatchModule {}
