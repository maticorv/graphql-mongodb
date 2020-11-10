import { Field } from "@nestjs/graphql";
import { Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Lesson {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;
    
    @Field()
    name: string;
    
    @Field()
    startDate:string;
    
    @Field()
    endDAte:string;

}
