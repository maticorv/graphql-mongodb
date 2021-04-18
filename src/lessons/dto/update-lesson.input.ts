import { CreateLessonInput } from './create-lesson.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @IsString()
  id: string;
  
  @IsString()
  name: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}