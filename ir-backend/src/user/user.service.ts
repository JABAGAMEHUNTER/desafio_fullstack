import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //cria usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    //checa se email existe
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException({ message: 'Email do usuario ja existente' });
    }

    const saltOrRounds = 10;
    const password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    createUserDto.password = password;
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  //lista todos os usuarios
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  //lista um usuario
  async findOne(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException({ message: 'Usuario nao encontrado' });
    }
    return user;
  }

  //update de um usuario
  async update(email: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(email);
    if (!user) {
      throw new BadRequestException({ message: 'Usuario nao encontrado' });
    }

    const updateUser = this.userRepository.merge(user, updateUserDto);
    return await this.userRepository.save(updateUser);
  }

  //delete user
  async remove(email: string): Promise<User> {
    const user = await this.findOne(email);
    if (!user) {
      throw new BadRequestException({ message: 'Usuario nao encontrado' });
    }
    return await this.userRepository.remove(user);
  }
}
