import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonInput } from './create-lesson.input';

export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  id: number;
}