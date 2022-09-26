import { Relationship, Tag, PlayerPreference, Role } from './Enum';

export class AuthRequest {
    username: string;
    password: string;
    user_email: string;

    constructor(data: undefined | any = {}) {
        this.username = data.username ?? 'NO USERNAME';
        this.password = data.password ?? 'NO PASSWORD';
        this.user_email = data.user_email ?? 'NO EMAIL';
    }
}

export class LoginRequest {
    username: string;
    password: string;

    constructor(data: undefined | any = {}) {
        this.username = data.username ?? 'NO USERNAME';
        this.password = data.password ?? 'NO PASSWORD';
    }
}

export class RelationRequest {
    self: string;
    other: string;
    type: Relationship;

    constructor(data: undefined | any = {}) {
        this.self = data.self ?? '00000000000000000000000000000000';
        this.other = data.other ?? '00000000000000000000000000000000';
        this.type = data.type ?? new Relationship();
    }
}

export class VerifyRequest {
    user_email: string;
    user_phone: string;
    pin: string;

    constructor(data: undefined | any = {}) {
        this.user_email = data.user_email ?? 'NO EMAIL';
        this.user_phone = data.user_phone ?? 'NO PHONE';
        this.pin = data.pin ?? 'NO PIN';
    }
}

export class TagRequest {
    user_id: string;
    tag: Tag;

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.tag = data.tag ?? new Tag();
    }
}

export class PlayerPreferenceRequest {
    user_id: string;
    pref: PlayerPreference;

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.pref = data.pref ?? new PlayerPreference();
    }
}

export class RoleRequest {
    user_id: string;
    role: Role;

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.role = data.role ?? new Role();
    }
}

export class TagsRequest {
    user_id: string;
    tags: Tag[];

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.tags = data.tags ?? [];
    }
}

export class PlayerPreferencesRequest {
    user_id: string;
    prefs: PlayerPreference[];

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.prefs = data.prefs ?? [];
    }
}

export class RolesRequest {
    user_id: string;
    roles: Role[];

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.roles = data.roles ?? [];
    }
}

export class RoleChangeRequest {
    user_id: string;
    role_id: string;

    constructor(data: undefined | any = {}) {
        this.user_id =
            data.user_id ?? '00000000000000000000000000000000';
        this.role_id =
            data.role_id ?? '00000000000000000000000000000000';
    }
}

export class ReportRequest {
    reporter_id: string;
    reported_id: string;
    reason: string;
    date: Date;

    constructor(data: undefined | any = {}) {
        this.reporter_id =
            data.reporter_id ?? '00000000000000000000000000000000';
        this.reported_id =
            data.reported_id ?? '00000000000000000000000000000000';
        this.reason = data.reason ?? 'NO REASON';
        this.date = data.date ?? Date.now().toString();
    }
}
