import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { TokenService } from './token.service';
import { tokenProviders } from './token.providers';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
  exports: [TokenService]
})
export class TokenModule {}