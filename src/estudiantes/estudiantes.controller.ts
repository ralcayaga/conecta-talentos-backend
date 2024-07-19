import { Body, Controller, Post, Get, Param} from '@nestjs/common';
import { EstudianteService } from './estudiantes.service';


@Controller('estudiante')
export class EstudiantesController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  crear(@Body() estudiante: any): any {
    return this.estudianteService.crear(estudiante);
  }

  @Get()
  obtenerTodos(): any[] {
    return this.estudianteService.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: string): any {
    return this.estudianteService.obtenerPorId(id);
  }
}