import { Module } from '@nestjs/common';
import { FirebaseModule } from '../firebase/firebase.module';
import { TodosService } from 'src/services/todos/todos.service';

@Module({
  imports: [FirebaseModule],
  providers: [TodosService],
  exports: [TodosService],
})
export class TodosModule {}