import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,

    }),
    LessonsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
