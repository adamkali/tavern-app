export class Character {
    "id": string;
    "name": string;
    "backstory": string;
    "bio": string;
    "strength": number;
    "dexterity": number;
    "constitution": number;
    "intellegence": number;
    "wisdom": number; 
    "charisma": number; 
    "character_class": string; 
    "character_level": string; 
    "character_traits": string;
    "user_id": string;

    constructor(data: undefined | any ={}) {
        this.id = data.id;
        this.name = data.name;
        this.backstory = data.backstory;
        this.bio = data.bio;
        this.strength = data.strength;
        this.dexterity = data.dexterity;
        this.constitution = data.constitution;
        this.intellegence = data.intellegence;
        this.wisdom = data.wisdom;
        this.charisma = data.charisma;
        this.character_level = data.character_level;
        this.character_class = data.character_class;
        this.character_traits = data.character_traits;
        this.user_id = data.user_id;
    }
}

export class Plot {
    "id": string;
    "plot_name": string;
    "plot": string;
    "user_id": string;

    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.plot_name = data.plot_name;
        this.plot = data.plot;
        this.user_id = data.user_id;
    }
}

export class User {
    "id": string;
    "username": string;
    "bio": string;
    "tags": string;
    "player_preference": string;
    "user_characters": Character[];
    "user_plots": Character[];

    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.username = data.username;
        this.bio = data.bio;
        this.tags = data.tags;
        this.player_preference = data.player_preference;
        this.user_characters = data.user_characters;
    }
}

export class CharacterDetailedResponse {
    "data": Character;
    "successful": boolean;
    "message": string;

    constructor(data: undefined | any={}) {
        this.data = data.data;
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class CharactersDetailedResponse {
    "data": Character[];
    "successful": boolean;
    "message": string;

    constructor(data: undefined | any={}) {
        this.data = data.data;
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class PlotDetailedResponse {
    "data": Plot;
    "successful": boolean;
    "message": string;

    constructor(data: undefined | any={}) {
        this.data = data.data;
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class PlotsDetailedResponse {
    "data": Plot[];
    "successful": boolean;
    "message": string;

    constructor(data: undefined | any={}) {
        this.data = data.data;
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class UserDetailedResponse {
    "data": User;
    "successful": boolean;
    "message": string;

    constructor(data: undefined | any={}) {
        this.data = data.data;
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class UsersDetailedResponse {
    "data": User[];
    "successful": boolean;
    "message": string;

    constructor(data: undefined | any={}) {
        this.data = data.data;
        this.successful = data.successful;
        this.message = data.message;
    }
}
