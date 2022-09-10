// Implement the Tags Class
// This class should be able to be built from a JSON object
export class Tag {
    id: string;
    tag_name: number;
    tag_id: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.tag_name = data.tag_name;
        this.tag_id = data.tag_description;
    }
}

// Implement an API Response Class called TagDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is a Tag object
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class TagDetailedResponse {
    data: Tag[];
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = data.data.map((tag: any) => new Tag(tag));
        this.successful = data.successful;
        this.message = data.message;
    }
}

export class PlayerPreference {
    id: string;
    preference_name: number;
    preference_id: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.preference_name = data.preference_name;
        this.preference_id = data.preference_description;
    }
}

// Implement an API Response Class called PlayerPreferencesDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is a PlayerPreference object
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class PlayerPreferencesDetailedResponse {
    data: PlayerPreference[];
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = data.data.map((playerPreference: any) => new PlayerPreference(playerPreference));
        this.successful = data.successful;
        this.message = data.message;
    }
}