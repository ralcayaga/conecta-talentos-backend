import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasController } from './empresas/empresas.controller';
import { EmpresasService } from './empresas/empresas.service';
import { EstudianteController } from './estudiante/estudiante.controller';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { OfertalaboralesController } from './ofertalaborales/ofertalaborales.controller';
import { OfertalaboralesService } from './ofertalaborales/ofertalaborales.service';
import { PostulacionesController } from './postulaciones/postulaciones.controller';
import { PostulacionesService } from './postulaciones/postulaciones.service';

@Module({
  imports: [],
  controllers: [AppController, EmpresasController, EstudianteController, EstudiantesController, OfertalaboralesController, PostulacionesController],
  providers: [AppService, EmpresasService, EstudiantesService, OfertalaboralesService, PostulacionesService],
})
export class AppModule {}
