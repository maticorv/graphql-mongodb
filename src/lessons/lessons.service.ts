import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from 'src/graphql';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async create(createLessonInput: CreateLessonInput) {
    return await this.lessonRepository.save(createLessonInput);
  }

  async findAll() {
    return await this.lessonRepository.find();
  }

  async findOne(id: string) {
    return await this.lessonRepository.findOne(id);
  }

  update(id: string, updateLessonInput: UpdateLessonInput) {
    return `This action updates a #${id} lesson`;
  }

  async remove(id: string) {
    if (await this.lessonRepository.findOne(id)) {
      this.lessonRepository.delete(id);
      return true
    } else {
      return false
    }
  }
}
