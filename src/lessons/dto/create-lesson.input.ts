import { IsDateString, IsString, MinLength } from 'class-validator';

export class CreateLessonInput {
    @MinLength(3)
    @IsString()
    name: string;

    @IsString()
    @IsDateString()	
    startDate: string;

    @IsString()
    @IsDateString()	
    endDate: string;
}
