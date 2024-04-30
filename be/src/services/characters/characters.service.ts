import { Injectable } from '@nestjs/common';
// import { Character } from 'src/interfaces/character.interface';
import { FirebaseRepository } from '../../firebase/firebase.repository'
import {data} from '../../data/characters'
import { Character } from 'src/models/character.model';


@Injectable()
export class CharactersService {
  private readonly characters: Character[] = [];

  constructor(private readonly firebaseRepository: FirebaseRepository) {}


  async findAllCharacters(): Promise<Character[]> {
    // If you have a collection of characters in Firestore, fetch them
    // For example, assuming you have a collection named 'characters'
    const querySnapshot = await this.firebaseRepository.getCollection('characters').get();
      // console.log('data======' + querySnapshot)

    // Map Firestore documents to Character objects
    const characters: Character[] = []
    querySnapshot.docs.map((doc) => characters.push(doc.data() as Character));

    return characters;
  }

  // async findAllCharacters(): Promise<Character[]> {
  //   try {
  //     // If you have a collection of characters in Firestore, fetch them
  //     // For example, assuming you have a collection named 'characters'
  //     const querySnapshot = await this.firebaseRepository.getCollection('characters').get();
      
  //     console.log('data======' + querySnapshot)
  //     // Map Firestore documents to Character objects
  //     const characters: Character[] = querySnapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       // Assuming Character has a constructor that accepts data
  //       return new Character(data);
  //     });
  
  //     return characters;
  //   } catch (error) {
  //     // Handle any potential errors here
  //     console.error('Error fetching characters:', error);
  //     throw error; // You may want to handle or log the error accordingly
  //   }
  // }
  

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

  async addCharacter(character: Character): Promise<void> {
    const collection = this.firebaseRepository.getCollection('characters');
    
    // Use the `set` method to add a new document to the collection
    await collection.doc(character.slug).set(character);
  }
}