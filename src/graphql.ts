
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateLessonInput {
    name?: string;
    startDate?: string;
    endDate?: string;
}

export class UpdateLessonInput {
    id: string;
    name?: string;
    startDate?: string;
    endDate?: string;
}

export class Lesson {
    _id: string;
    id?: string;
    name?: string;
    startDate?: string;
    endDate?: string;
}

export abstract class IQuery {
    abstract lessons(): Lesson[] | Promise<Lesson[]>;

    abstract lesson(id: string): Lesson | Promise<Lesson>;
}

export abstract class IMutation {
    abstract createLesson(createLessonInput: CreateLessonInput): Lesson | Promise<Lesson>;

    abstract updateLesson(updateLessonInput: UpdateLessonInput): Lesson | Promise<Lesson>;

    abstract removeLesson(id: string): Lesson | Promise<Lesson>;
}
