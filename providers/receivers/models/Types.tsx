import { TavernModels } from '..';
import { Tag, PlayerPreference, Role, Relationship } from './Enum';
import TavernData from './TavernData';

export class Plot extends TavernData {
    id: string;
    plot_name: string;
    plot: string;
    user_id: string;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.plot_name });

        this.id = data.id ?? '00000000000000000000000000000000';
        this.plot_name = data.plot_name ?? 'NO PLOT NAME';
        this.plot = data.plot ?? 'NO PLOT';
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
    }
}

export class Character extends TavernData {
    id: string;
    character_name: string;
    backstory: string;
    bio: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    chatacter_class: string;
    character_level: number;
    character_traits: string;
    character_hit_points: number;
    user_id: string;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.character_name });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.character_name =
            data.character_name ?? 'NO CHARACTER NAME';
        this.backstory = data.backstory ?? 'NO BACKSTORY';
        this.bio = data.bio ?? 'NO BIO';
        this.strength = data.strength ?? 10;
        this.dexterity = data.dexterity ?? 10;
        this.constitution = data.constitution ?? 10;
        this.intelligence = data.intelligence ?? 10;
        this.wisdom = data.wisdom ?? 10;
        this.charisma = data.charisma ?? 10;
        this.chatacter_class = data.chatacter_class ?? 'Commoner';
        this.character_level = data.character_level ?? 0;
        this.character_traits = data.character_traits ?? 'NO TRAITS';
        this.character_hit_points = data.character_hit_points ?? 10;
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
    }
}

export class User extends TavernData {
    id: string;
    username: string;
    bio: string;
    user_plots: Plot[];
    user_characters: Character[];
    user_tags: Tag[];
    pref_fk: string
    user_player_preference: PlayerPreference;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.username });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.username = data.username ?? 'NO USERNAME';
        this.bio = data.bio ?? 'NO BIO';
        this.user_plots = data.user_plots ?? [];
        this.user_characters = data.user_characters ?? [];
        this.user_tags = data.user_tags ?? [];
        this.pref_fk = data.pref_fk ?? TavernModels.EmptyGuid
        this.user_player_preference =
            data.user_player_preferences ?? new PlayerPreference();
    }
}

export class AuthToken extends TavernData {
    id: string;
    user_fk: string;
    username: string;
    user_email: string;
    auth_hash: string;
    active: boolean;
    role_fk: string;
    role: Role;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.username });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.user_fk =
            data.user_fk ?? '00000000000000000000000000000000';
        this.username = data.username ?? 'NO USERNAME';
        this.user_email = data.user_email ?? 'NO EMAIL';
        this.auth_hash = data.auth_hash ?? 'NO AUTH HASH';
        this.active = data.active ?? false;
        this.role_fk =
            data.role_fk ?? '00000000000000000000000000000000';
        this.role = data.role ?? new Role();
    }
}

export class UserRelationship extends TavernData {
    id: string;
    self_id: string;
    other_id: string;
    relationship_fk: string;
    relationship: Relationship;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.relationship.name });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.self_id =
            data.self_id ?? '00000000000000000000000000000000';
        this.other_id =
            data.other_id ?? '00000000000000000000000000000000';
        this.relationship_fk =
            data.relationship_fk ?? '00000000000000000000000000000000';
        this.relationship = data.relationship ?? new Relationship();
    }
}
