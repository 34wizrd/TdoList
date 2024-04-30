import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Character } from 'src/interfaces/character.interface';
import { TodosService } from './todos.service';
import { TTodo, Todo, TodoDto } from 'src/models/todo.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get("findAllTodos")
  async findAllTodos(): Promise<Todo[]> {
    return this.todosService.findAllTodos();
  }

  @Get('/findOneCharacter/:slug')
  async findOneCharacter(@Param('slug') slug: string): Promise<Character> {
    return this.todosService.findOneCharacter(slug);
  }

  @Post('/addTodo')
  async addTodo(@Body() todo: TTodo) {
    return this.todosService.addTodo(todo);
    
  }
}
