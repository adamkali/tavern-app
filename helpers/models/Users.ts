import { Character } from "./Characters";
import { Plot } from "./Plots";

// make an enum for the User player_preferences
// the player_preferences enum is used to determine whether plots, characters, both or none are shown.
// the choices are:
//   - "None"
//   - "Chat"
//   - "Dungeon Master"
//   - "Player"
//   - "Both"
//   - "Both (DM preferred)"
//   - "Both (Player preferred)"
export enum UserPlayerPreferences {
    None = "None",
    Chat = "Chat",
    DungeonMaster = "Dungeon Master",
    Player = "Player",
    Both = "Both",
    Both_DM_Preferred = "Both (DM preferred)",
    Both_Player_Preferred = "Both (Player preferred)"
}

/**
 * User model
 * @class User
 * @property {string} id - User's ID
 * @property {string} name - User's name
 * @property {string} tags - User's tags that describe their interests
 * @property {string} bio - User's bio
 * @property {string} player_prefernce - User's Prefered Player role can be one of the following:
 *                                          - "None"
 *                                          - "Chat"
 *                                          - "Dungeon Master"
 *                                          - "Player"
 *                                          - "Both"
 *                                          - "Both (DM preferred)"
 *                                          - "Both (Player preferred)"
 * @property {Plot[]} user_plots - User's Created Plots (if any) as an array of Plot objects
 *                              depending if they have a player_preference of "Both" or "Dungeon Master"
 * @property {Character[]} user_characters - User's Created Characters (if any) as an array of Character objects
 *                                       depending if they have a player_preference of "Both" or "Player"         
 * 
 */
// Create a class that represents a user model that will be used for an API Client
// This class will be able to be built from a JSON object
export class User {
    id: number;
    username: string;
    tags: string;
    bio: string;
    player_prefernce: string;
    user_plots?: Plot[];
    user_characters?: Character[];

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.username = data.username;
        this.tags = data.tags;
        this.bio = data.bio;
        this.player_prefernce = data.player_prefernce;
        this.user_plots = data.user_plots;
        this.user_characters = data.user_characters;
    }

    // Create a method that will set the player_prefernce to the value of the enum
    // the value of the enum will be passed in as a UserPlayerPreferences
    setPlayerPreference(preference: UserPlayerPreferences) {
        this.player_prefernce = preference;
    }

    // create a method that will creata a new Plot object and add it to the user's plots array
    // the Plot object will be passed in as a Plot
    addPlot(plot: Plot) {
        // make a new array if the user doesn't have any plots
        if (!this.user_plots) {
            this.user_plots = [];
        }
        // add the plot to the user's plots array
        this.user_plots.push(plot);
    }

    // create a method that will creata a new Character object and add it to the user's characters array
    // the Character object will be passed in as a Character
    // make sure to check if the user has any characters
    // if the user doesn't have any characters, make sure to create an empty array
    // add the character to the user's characters array
    addCharacter(character: Character) {
        // make a new array if the user doesn't have any characters
        if (!this.user_characters) {
            this.user_characters = [];
        }
        // add the character to the user's characters array
        this.user_characters.push(character);
    }
}

// Implment an API Response Class called UserDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is a User object
// It will have a property called successful that is a boolean
export class UserDetailedResponse {
  data: User;
  successful: boolean;
  message: string;

  // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
  constructor(data: undefined | any = {}) {
      this.data = new User(data.data);
      this.successful = data.successful;
      this.message = data.message;
  }
}

// Implment an API Response Class called UsersDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is an array of User objects
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class UsersDetailedResponse {
	data: User[];
	successful: boolean;
	message: string;
  
  	// Make a constructor that takes a JSON Object that can be undefined or any type JSON object
	constructor(data: undefined | any = {}) {
		this.data = data.data.map((user: any = {}) => new User(user));
		this.successful = data.successful;
    	this.message = data.message;
	}
}