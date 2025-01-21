import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DeclaracaoService } from './declaracao.service';
import { CreateDeclaracaoDto } from './dto/create-declaracao.dto';
import { UpdateDeclaracaoDto } from './dto/update-declaracao.dto';
import {AuthGuard} from 'src/auth/auth.guard';

@Controller('declaracao')
export class DeclaracaoController {
  constructor(private readonly declaracaoService: DeclaracaoService) {}

  @Post()
  async create(@Body() createDeclaracaoDto: CreateDeclaracaoDto) {
    return await this.declaracaoService.create(createDeclaracaoDto);
  }


  @Get()
  async findAll() {
    const declaracao = await this.declaracaoService.findAll();
    return {
      success: true,
      declaracao,
      message: 'Declaracoes listadas com sucesso',
    };
  }


  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const declaracao = await this.declaracaoService.findOne(+id);
    return {
      success: true,
      declaracao,
      message: 'Declaracao listada com sucesso',
    };
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDeclaracaoDto: UpdateDeclaracaoDto) {
    const declaracao = await this.declaracaoService.update(+id, updateDeclaracaoDto);
    return {
      success: true,
      declaracao,
      message: 'Declaracao atualizada com sucesso',
    };
  }


  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.declaracaoService.remove(+id);
    return {
      success: true,
      message: 'Declaracao deletada com sucesso',
    };
  }
}
