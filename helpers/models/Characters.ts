// Implement the characters model
// This class should be able to be built from a JSON object
export class Character {
    id: number;
    character_name: string;
    back_story: string;
    bio: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    character_class: string;
    character_level: number;
    character_traits: string;
    character_race: string;
    character_hit_points: string;
    user_id: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.character_name = data.character_name;
        this.back_story = data.back_story;
        this.bio = data.bio;
        this.strength = data.strength;
        this.dexterity = data.dexterity;
        this.constitution = data.constitution;
        this.intelligence = data.intelligence;
        this.wisdom = data.wisdom;
        this.charisma = data.charisma;
        this.character_class = data.character_class;
        this.character_level = data.character_level;
        this.character_traits = data.character_traits;
        this.character_race = data.character_race;
        this.character_hit_points = data.character_hit_points;
        this.user_id = data.user_id;
    }
}

// Implement an API Response Class called CharacterDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is a Characters object
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class CharacterDetailedResponse {
    data: Character;
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = new Character(data.data);
        this.successful = data.successful;
        this.message = data.message;
    }
}

// Implement an API Response Class called CharactersDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is an array of Character objects
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class CharactersDetailedResponse {
    data: Character[];
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = data.data.map((character: any) => new Character(character));
        this.successful = data.successful;
        this.message = data.message;
    }
}