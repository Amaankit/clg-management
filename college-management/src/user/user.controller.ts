// user.controller.ts
import {
  Controller,
  // Get,
  // Post,
  // Put,
  // Delete,
  // Param,
  // Body,
  // UsePipes,
  // ValidationPipe,
  // UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
// import { User } from './interface/user.interface';
// import { UserParamDto } from './dto/user.params.dto';
// import { HttpExceptionFilter } from '../filters/http.exception';
@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @UsePipes(new ValidationPipe())
  //   @Post()
  //   createUser(@Body() createUserDto: CreateUserDto): User {
  //     return this.userService.createUser(createUserDto);
  //   }

  //   @Get()
  //   getAllUsers(): User[] {
  //     return this.userService.getAllUsers();
  //   }

  //   @UseFilters(new HttpExceptionFilter())
  //   @UsePipes(
  //     new ValidationPipe({
  //       transform: true,
  //       transformOptions: { enableImplicitConversion: true },
  //     }),
  //   )
  //   @Get(':id')
  //   getUserById(@Param('') params: UserParamDto): User | undefined {
  //     return this.userService.getUserById(+params.id);
  //   }

  //   @UsePipes(
  //     new ValidationPipe({
  //       transform: true,
  //       transformOptions: { enableImplicitConversion: true },
  //     }),
  //   )
  //   @Put(':id')
  //   updateUser(
  //     @Param('') params: UserParamDto,
  //     @Body() updateUserDto: UpdateUserDto,
  //   ): User {
  //     return this.userService.updateUser(+params.id, updateUserDto);
  //   }

  //   @UsePipes(
  //     new ValidationPipe({
  //       transform: true,
  //       transformOptions: { enableImplicitConversion: true },
  //     }),
  //   )
  //   @Delete(':id')
  //   deleteUser(@Param('') params: UserParamDto): void {
  //     this.userService.deleteUser(+params.id);
  //   }
}
