import { Injectable } from '@nestjs/common';
import { registerUser } from './dto/registerUser.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(registerUser)
    private readonly userRepository: Repository<registerUser>,
  ) {}

  async createUser(payload: registerUser) {
    const newuser = this.userRepository.create({
      name: payload.name,
      password: payload.password,
      age: payload.age,
      address: payload.address,
      zipcode: payload.zipcode,
    });
    this.userRepository.save(newuser);

    return `User added Successfully`;
  }

  async getAllUsers() {
    return await this.userRepository.find();
  }

  async getUser(id: registerUser['id']) {
    const foundUser: registerUser = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!foundUser) throw new Error('User not found');

    return foundUser;
  }
}
