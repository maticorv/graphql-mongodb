import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsResolver } from './lessons.resolver';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Lesson } from './entities/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonsResolver, LessonsService]
})
export class LessonsModule {}
