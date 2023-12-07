import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Roles } from '../common/decorators/role.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/role.guard';

import { SubjectsParamsDto } from './dto/subject.params.dto';
import { User } from '../user/interface/user.interface';
import AuthUser from 'src/common/decorators/auth-user.decorator';
import {
  COMMON_PERMISSION,
  ONLY_ADMIN,
} from '../common/constants/user.permission';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Roles(...ONLY_ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Roles(...COMMON_PERMISSION)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  findAll(@Query() query: SubjectsParamsDto, @AuthUser() user: User) {
    return this.subjectService.findAll(query, user.usergroup);
  }

  @Roles(...COMMON_PERMISSION)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @AuthUser() user: User) {
    return this.subjectService.findOne(+id, user.usergroup);
  }

  @Roles(...COMMON_PERMISSION)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDto);
  }
}
