import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {AuthGuard} from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const user = await this.userService.findAll();
    return {
      success: true,
      user,
      message: 'Usuarios listados com sucesso',
    };
  }

  @UseGuards(AuthGuard)
  @Get(':email')
  async findOne(@Param('email') email: string) {
    const user = await this.userService.findOne(email);
    return {
      success: true,
      user,
      message: 'Usuario listado com sucesso',
    };
  }

  @UseGuards(AuthGuard)
  @Patch(':email')
  async update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    const data = await this.userService.update(email, updateUserDto);
    return {
      success: true,
      data,
      message: 'Usuario atualizado com sucesso',
    };
  }

  @UseGuards(AuthGuard)
  @Delete(':email')
  async remove(@Param('email') email: string) {
    await this.userService.remove(email);
    return {
      success: true,
      message: 'Usuario deletado com sucesso',
    };
  }
}
