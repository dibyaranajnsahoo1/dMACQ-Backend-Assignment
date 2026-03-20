import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../../../models/src/lib/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private model: Model<Task>) {}

  create(dto, userId) {
    return this.model.create({ ...dto, userId });
  }

  findAll(user) {
    if (user.role === 'ADMIN') return this.model.find();
    return this.model.find({ userId: user.sub });
  }

  update(id, dto, user) {
    return this.model.findOneAndUpdate(
      {
        _id: id,
        ...(user.role !== 'ADMIN' && { userId: user.sub }),
      },
      dto,
      { new: true }
    );
  }

  delete(id, user) {
    return this.model.findOneAndDelete({
      _id: id,
      ...(user.role !== 'ADMIN' && { userId: user.sub }),
    });
  }
}