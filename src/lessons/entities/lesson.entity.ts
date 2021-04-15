import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType() 
export class Lesson {
    @ObjectIdColumn()
    _id: string;

    @Field()
    name: string;
    
    @Field()
    startDate:string;
    
    @Field()
    endDAte:string;

}
