/* tslint:disable */
/* eslint-disable */
/**
 * Tavern Profile Api
 * The Tavern-Profile-API is a backend application meant to geve access to users, see other profiles, and like or dislike profiles.
 *
 * The version of the OpenAPI document: 0.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Character,
    CharacterFromJSON,
    CharacterFromJSONTyped,
    CharacterToJSON,
} from './Character';
import {
    Plot,
    PlotFromJSON,
    PlotFromJSONTyped,
    PlotToJSON,
} from './Plot';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    bio?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    tags?: string;
    /**
     * 
     * @type {Array<Array<Plot>>}
     * @memberof User
     */
    userPlots?: Array<Array<Plot>>;
    /**
     * 
     * @type {Array<Array<Character>>}
     * @memberof User
     */
    userCharacters?: Array<Array<Character>>;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'bio': !exists(json, 'bio') ? undefined : json['bio'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'userPlots': !exists(json, 'user_plots') ? undefined : json['user_plots'],
        'userCharacters': !exists(json, 'user_characters') ? undefined : json['user_characters'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'bio': value.bio,
        'tags': value.tags,
        'user_plots': value.userPlots,
        'user_characters': value.userCharacters,
    };
}

