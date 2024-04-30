import { Injectable } from '@nestjs/common';
// import { Character } from 'src/interfaces/character.interface';
import { FirebaseRepository } from '../../firebase/firebase.repository'
import { Character } from 'src/models/character.model';
import { TTodo, Todo, TodoDto } from 'src/models/todo.model';


@Injectable()
export class TodosService {

  constructor(private readonly firebaseRepository: FirebaseRepository) {}

  async findAllTodos(): Promise<Todo[]> {
    // If you have a collection of characters in Firestore, fetch them
    // For example, assuming you have a collection named 'characters'
    const querySnapshot = await this.firebaseRepository.getCollection('todos').get();
      // console.log('data======' + querySnapshot)

    // Map Firestore documents to Character objects
    const todos: Todo[] = []
    querySnapshot.docs.map((doc) => todos.push(doc.data() as Todo));

    return todos;
  }

  async findOneCharacter(characterSlug: string): Promise<Character | null> {
    // If you have a collection of characters in Firestore, fetch them
    // For example, assuming you have a collection named 'characters'
    const querySnapshot = await this.firebaseRepository.getCollection('characters').doc(characterSlug).get();

    if (querySnapshot.exists) {
      // If the document exists, return the character data
      const characterData = querySnapshot.data() as Character;
      return characterData;
    } else {
      // If the document does not exist, return null or handle as appropriate
      return null;
    }
  }

  async addTodo(todo: TTodo): Promise<void> {
    const collection = this.firebaseRepository.getCollection('todos');
    
    // Use the `set` method to add a new document to the collection
    await collection.doc('todos').set(todo);
  }
}