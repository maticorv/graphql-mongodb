import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonsService } from './lessons.service';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { Lesson } from './entities/lesson.entity';

@Resolver('Lesson')
export class LessonsResolver {
  constructor(private readonly lessonsService: LessonsService) {}

  @Mutation(() => Lesson)
  create(@Args('createLessonInput') createLessonInput: CreateLessonInput):Promise<Lesson> {
    return this.lessonsService.create(createLessonInput);
  }

  @Query(() => String)
  findAll() {
    return this.lessonsService.findAll();
  }

  @Query(() => String)
  findOne(@Args('id') id: number) {
    return this.lessonsService.findOne(id);
  }

  @Mutation(() => String)
  update(@Args('updateLessonInput') updateLessonInput: UpdateLessonInput) {
    return this.lessonsService.update(updateLessonInput.id, updateLessonInput);
  }

  @Mutation(() => String)
  remove(@Args('id') id: number) {
    return this.lessonsService.remove(id);
  }
}
