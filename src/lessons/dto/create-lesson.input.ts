import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
@ObjectType()
export class CreateLessonInput {
    @Field()
    id: number;
}