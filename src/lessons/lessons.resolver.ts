import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonsService } from './lessons.service';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';

@Resolver('Lesson')
export class LessonsResolver {
  constructor(private readonly lessonsService: LessonsService) {}

  @Mutation('createLesson')
  create(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonsService.create(createLessonInput);
  }

  @Query('lessons')
  findAll() {
    return this.lessonsService.findAll();
  }

  @Query('lesson')
  findOne(@Args('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @Mutation('updateLesson')
  update(@Args('updateLessonInput') updateLessonInput: UpdateLessonInput) {
    return this.lessonsService.update(updateLessonInput.id, updateLessonInput);
  }

  @Mutation('removeLesson')
  remove(@Args('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
