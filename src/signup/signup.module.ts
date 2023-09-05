import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { registerUser } from './dto/registerUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([registerUser])],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
