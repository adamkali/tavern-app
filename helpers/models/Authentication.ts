export class AuthToken {
    id: string;
    user_fk: string;
    username: string;
    user_email: string;
    auth_hash: string;
    active: boolean;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.user_fk = data.user_fk;
        this.username = data.username;
        this.user_email = data.user_email;
        this.auth_hash = data.auth_hash;
        this.active = data.active;
    }
}

// Implement an API Response Class called TokenDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is a Token object
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class TokenDetailedResponse {
    data: AuthToken;
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = new AuthToken(data.data);
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class AuthTokenActivation {
    id: string;
    auth_fk: string;
    auth_pin: string;
    auth_email: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.auth_fk = data.auth_fk;
        this.auth_pin = data.auth_pin;
        this.auth_email = data.auth_email;
    }
}

// make a class called AuthRequest
export class AuthRequest {
    username: string;
    password: string;
    user_email: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.username = data.username;
        this.password = data.password;
        this.user_email = data.user_email;
    }
}

export class LoginRequest {
    username: string;
    password: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.username = data.username;
        this.password = data.password;
    }
}