import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { RendimentosService } from './rendimentos.service';
import { CreateRendimentoDto } from './dto/create-rendimento.dto';
import { UpdateRendimentoDto } from './dto/update-rendimento.dto';
import {AuthGuard} from 'src/auth/auth.guard';

@Controller('rendimentos')
export class RendimentosController {
  constructor(private readonly rendimentosService: RendimentosService) {}

  @Post()
  async create(@Body() createRendimentoDto: CreateRendimentoDto) {
    return this.rendimentosService.create(createRendimentoDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const rendimento = await this.rendimentosService.findAll();
    return {
      success: true,
      rendimento,
      message: 'Rendimentos listados com successo',
    };
  }


  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const rendimento = await this.rendimentosService.findOne(+id);
    return {
      success: true,
      rendimento,
      message: 'Rendimento listado com successo',
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRendimentoDto: UpdateRendimentoDto) {
    const rendimento = await this.rendimentosService.update(+id, updateRendimentoDto);
    return {
        success: true,
        rendimento,
        message: 'Rendimentos listado com successo',
    };
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.rendimentosService.remove(+id);
    return {
      success: true,
      message: 'Rendimento deletado com sucesso'
    };
  }
}
