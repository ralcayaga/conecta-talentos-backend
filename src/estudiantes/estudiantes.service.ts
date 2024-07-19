import { Injectable } from '@nestjs/common';

@Injectable()
export class EstudianteService {
  private estudiantes: any[] = [];

  crear(estudiante: any): any {
    const nuevoEstudiante = {
      id: Date.now().toString(),
      ...estudiante,
    };
    this.estudiantes.push(nuevoEstudiante);
    return nuevoEstudiante;
  }

  obtenerTodos(): any[] {
    return this.estudiantes;
  }

  obtenerPorId(id: string): any {
    return this.estudiantes.find(estudiante => estudiante.id === id);
  }
}