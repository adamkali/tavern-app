export interface IData {
    id: string;
}

export class Tag implements IData {
    id: string;
    tag_name: string;

    constructor(data: undefined | any = {}) {
        this.id = data.id ?? '00000000000000000000000000000000';
        this.tag_name = data.tag_name ?? 'NO TAG NAME';
    }
}

export class PlayerPreference implements IData {
    id: string;
    pref_name: string;

    constructor(data: undefined | any = {}) {
        this.id = data.id ?? '00000000000000000000000000000000';
        this.pref_name = data.pref_name ?? 'NO PREFERENCE NAME';
    }
}

export class Relationship implements IData {
    id: string;
    relationship_name: string;
    negative: boolean;

    constructor(data: undefined | any = {}) {
        this.id = data.id ?? '00000000000000000000000000000000';
        this.relationship_name =
            data.relationship_name ?? 'NO RELATIONSHIP NAME';
        this.negative = data.negative ?? false;
    }
}

export class Role implements IData {
    id: string;
    role_name: string;

    constructor(data: undefined | any = {}) {
        this.id = data.id ?? '00000000000000000000000000000000';
        this.role_name = data.role_name ?? 'NO ROLE NAME';
    }
}
