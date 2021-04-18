import { IsInt, IsString } from 'class-validator';

export class CreateLessonInput {
    @IsString()
    name: string;

    @IsString()
    startDate: string;

    @IsString()
    endDate: string;
}
