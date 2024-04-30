import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config'
import { CharactersController } from './services/characters/characters.controller';
import { CharactersModule } from './modules/characters.module';
import { TodosController } from './services/todos/todos.controller';
import { TodosModule } from './modules/todos.module';


@Module({
  imports: [ConfigModule.forRoot({ cache: true }),
  CharactersModule, TodosModule ],
  controllers: [AppController,
    CharactersController,
    TodosController
  ],
  providers: [AppService,
  ],
})
export class AppModule {}
