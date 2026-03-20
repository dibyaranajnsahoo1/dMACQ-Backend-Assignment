import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '../../../auth/src/lib/auth.module';
import { UsersModule } from '../../../users/src/lib/users.module';
import { TasksModule } from '../../../tasks/src/lib/tasks.module';
import { AnalyticsModule } from '../../../analytics/src/lib/analytics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/task-manager'),
    AuthModule,
    UsersModule,
    TasksModule,
    AnalyticsModule,
  ],
})
export class AppModule {}