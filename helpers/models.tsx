export interface Character {
    id: string;
    name: string;
    backstory: string;
    bio: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intellegence: number;
    wisdom: number;
    charisma: number;
    character_class: string;
    character_level: string;
    character_traits: string;
    user_id: string;

}

export interface Plot {
    id: string;
    plot_name: string;
    plot: string;
    user_id: string;

}

export interface User {
    id: string;
    username: string;
    bio: string;
    tags: string;
    player_preference: string;
    user_characters: Character[];
    user_plots: Plot[];
}

export interface CharacterDetailedResponse {
    data: Character;
    successful: boolean;
    message: string;
}

export interface CharactersDetailedResponse {
    data: Character[];
    successful: boolean;
    message: string;
}

export interface PlotDetailedResponse {
    data: Plot;
    successful: boolean;
    message: string;
}

export interface PlotsDetailedResponse {
    data: Plot[];
    successful: boolean;
    message: string;
}

export interface UserDetailedResponse {
    data: User;
    successful: boolean;
    message: string;
}

export interface UsersDetailedResponse {
    data: User[];
    successful: boolean;
    message: string;
}
