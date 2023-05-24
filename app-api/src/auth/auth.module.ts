import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [UsuarioModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s'},
    }),],
  providers: [AuthService, LocalStrategy]
}),
export class AuthModule {}
