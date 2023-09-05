import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { registerUser } from './dto/registerUser.entity';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupService) {}

  @Post('/register')
  RegisterUser(@Body() body: registerUser): Promise<string> {
    return this.signupService.createUser(body);
  }

  @Get('/users')
  FetchAllUsers(): Promise<registerUser[]> {
    return this.signupService.getAllUsers();
  }

  @Get('/users/:id')
  FetchUser(@Param('id') id: registerUser['id']): Promise<registerUser> {
    return this.signupService.getUser(id);
  }
}
