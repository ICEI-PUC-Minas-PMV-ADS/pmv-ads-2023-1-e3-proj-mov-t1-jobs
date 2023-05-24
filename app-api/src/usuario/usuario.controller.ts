import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common/';
import { Usuario } from './usuario.entity'
import { UsuarioService } from './usuario.service';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]>{
    return this.usuarioService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data) 
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
