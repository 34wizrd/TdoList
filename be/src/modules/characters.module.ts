import { Module } from '@nestjs/common';
import { CharactersService } from '../services/characters/characters.service';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [CharactersService],
  exports: [CharactersService],
})
export class CharactersModule {}