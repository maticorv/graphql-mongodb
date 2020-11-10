import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
@ObjectType()
export class CreateLessonInput {
    @Field()
    name: string;
    
    @Field()
    startDate:string;
    
    @Field()
    endDAte:string;
}