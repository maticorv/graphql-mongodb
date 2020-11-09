import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,

    }),
    LessonsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
