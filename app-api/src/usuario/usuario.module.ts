import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [UsuarioController],
  providers: [
    ...usuarioProviders,
    UsuarioService,
  ],
  exports: [UsuarioService]
})
export class UsuarioModule {}