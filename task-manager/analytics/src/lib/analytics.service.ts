import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../../../models/src/lib/task.schema';

@Injectable()
export class AnalyticsService {
  constructor(@InjectModel(Task.name) private model: Model<Task>) {}

  async stats() {
    const status = await this.model.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);

    return { status };
  }
}