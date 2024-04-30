import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from 'src/interfaces/character.interface';
import { data } from 'src/data/characters';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { CatsService } from './cats.service';
// import { Cat } from './interfaces/cat.interface';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get()
  async findAllCharacters(): Promise<Character[]> {
    return this.charactersService.findAllCharacters();
  }

  @Get('/findOneCharacter/:slug')
  async findOneCharacter(@Param('slug') slug: string): Promise<Character> {
    return this.charactersService.findOneCharacter(slug);
  }

  

  @Post()
  async createCharacters(@Body() characters: Character[]) {
    try {
      // Use Promise.all to execute all asynchronous operations concurrently
      await Promise.all(
        characters.map((character) =>
          this.charactersService.addCharacter(character),
        ),
      );

      return 'Characters added successfully';
    } catch (error) {
      // Log the error or handle it appropriately
      console.error(error);
      return 'Failed to add characters';
    }
  }
}
