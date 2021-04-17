import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType() 
export class Lesson {
    @ObjectIdColumn()
    @Field(type => ID)
    _id: ObjectID;

    @Field()
    name: string;
    
    @Field()
    startDate:string;
    
    @Field()
    endDAte:string;

}
