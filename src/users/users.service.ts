import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create({ name }: CreateUserDto): Promise<User> {
    return await this.userRepository
      .save({
        name: name,
      })
      .catch((e) => {
        throw new InternalServerErrorException(
          `[${e.message}]：ユーザーの登録に失敗しました。`,
        );
      });
  }
}
