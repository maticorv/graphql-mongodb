import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Lesson')
export class LessonType {
    @Field(() => ID)
    id: string;
    
    @Field()
    name: string;
    
    @Field()
    startDate:string;
    
    @Field()
    endDAte:string;

}