import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultadoDto } from 'src/dto/resultado.dto';
import * as bcrypt from 'bcrypt';
import { Token } from './token.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
  ) {}

  async save(hash: string, username: string){
    this.tokenRepository.insert({
      hash: hash,
      username: username
    })
  }
}