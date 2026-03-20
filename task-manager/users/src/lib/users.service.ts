import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../../models/src/lib/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  create(data) {
    return this.model.create(data);
  }

  findByEmail(email: string) {
    return this.model.findOne({ email });
  }
}