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

/**
 * 
 * @export
 * @interface CharactersDetailedResponse
 */
export interface CharactersDetailedResponse {
    /**
     * 
     * @type {Array<Character>}
     * @memberof CharactersDetailedResponse
     */
    data?: Array<Character> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CharactersDetailedResponse
     */
    succsessful?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CharactersDetailedResponse
     */
    message?: string;
}

export function CharactersDetailedResponseFromJSON(json: any): CharactersDetailedResponse {
    return CharactersDetailedResponseFromJSONTyped(json, false);
}

export function CharactersDetailedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharactersDetailedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(CharacterFromJSON)),
        'succsessful': !exists(json, 'succsessful') ? undefined : json['succsessful'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function CharactersDetailedResponseToJSON(value?: CharactersDetailedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(CharacterToJSON)),
        'succsessful': value.succsessful,
        'message': value.message,
    };
}

