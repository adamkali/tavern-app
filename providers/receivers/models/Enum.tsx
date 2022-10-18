import TavernData from './TavernData';

export class Tag extends TavernData {
    id: string;
    tag_name: string;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.tag_name });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.tag_name = data.tag_name ?? 'NO TAG NAME';
    }
}

export class PlayerPreference extends TavernData {
    id: string;
    pref_name: string;
    game: string;
    experience: string;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.pref_name });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.pref_name = data.pref_name ?? 'NO PREFERENCE NAME';
        (this.game = data.game ?? 'Paint Drying'),
            (this.experience = data.experience ?? 'No Cares Given.');
    }
}

export class Relationship extends TavernData {
    id: string;
    relationship_name: string;
    negative: boolean;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.relationship_name });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.relationship_name =
            data.relationship_name ?? 'NO RELATIONSHIP NAME';
        this.negative = data.negative ?? false;
    }
}

export class Role extends TavernData {
    id: string;
    role_name: string;

    constructor(data: undefined | any = {}) {
        super({ id: data.id, name: data.role_name });
        this.id = data.id ?? '00000000000000000000000000000000';
        this.role_name = data.role_name ?? 'NO ROLE NAME';
    }
}
