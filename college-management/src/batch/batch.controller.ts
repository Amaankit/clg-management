import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BatchService } from './batch.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { BatchParamsDto } from './dto/batch.params.dto';
import AuthUser from '../common/decorators/auth-user.decorator';
import { User } from '../user/interface/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../common/decorators/role.decorator';
import { RolesGuard } from '../common/guards/role.guard';
import {
  COMMON_PERMISSION,
  ONLY_ADMIN,
} from '../common/constants/user.permission';

@Controller('batch')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}

  @Roles(...ONLY_ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  create(@Body() createBatchDto: CreateBatchDto) {
    return this.batchService.create(createBatchDto);
  }

  @Roles(...COMMON_PERMISSION)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  findAll(@Query() query: BatchParamsDto, @AuthUser() user: User) {
    return this.batchService.findAll(query, user.usergroup);
  }

  @Roles(...COMMON_PERMISSION)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @AuthUser() user: User) {
    return this.batchService.findOne(+id, user.usergroup);
  }

  @Roles(...ONLY_ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBatchDto: UpdateBatchDto) {
    return this.batchService.update(+id, updateBatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batchService.remove(+id);
  }
}
