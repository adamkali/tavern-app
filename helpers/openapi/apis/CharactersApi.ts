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


import * as runtime from '../runtime';
import {
    Character,
    CharacterFromJSON,
    CharacterToJSON,
    CharacterDetailedResponse,
    CharacterDetailedResponseFromJSON,
    CharacterDetailedResponseToJSON,
    CharactersDetailedResponse,
    CharactersDetailedResponseFromJSON,
    CharactersDetailedResponseToJSON,
} from '../models';

export interface ApiCharactersCharacterIdGetRequest {
    characterId: string;
}

export interface ApiCharactersCharacterIdPostRequest {
    characterId: string;
    character?: Character;
}

export interface ApiCharactersUserIdUserIdDeleteRequest {
    userId: string;
}

export interface ApiCharactersUserIdUserIdGetRequest {
    userId: string;
}

export interface ApiCharactersUserIdUserIdPutRequest {
    userId: string;
    character?: Character;
}

/**
 * 
 */
export class CharactersApi extends runtime.BaseAPI {

    /**
     */
    async apiCharactersCharacterIdGetRaw(requestParameters: ApiCharactersCharacterIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CharactersDetailedResponse>> {
        if (requestParameters.characterId === null || requestParameters.characterId === undefined) {
            throw new runtime.RequiredError('characterId','Required parameter requestParameters.characterId was null or undefined when calling apiCharactersCharacterIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/characters/{characterId}`.replace(`{${"characterId"}}`, encodeURIComponent(String(requestParameters.characterId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharactersDetailedResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCharactersCharacterIdGet(requestParameters: ApiCharactersCharacterIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CharactersDetailedResponse> {
        const response = await this.apiCharactersCharacterIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCharactersCharacterIdPostRaw(requestParameters: ApiCharactersCharacterIdPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CharacterDetailedResponse>> {
        if (requestParameters.characterId === null || requestParameters.characterId === undefined) {
            throw new runtime.RequiredError('characterId','Required parameter requestParameters.characterId was null or undefined when calling apiCharactersCharacterIdPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/characters/{characterId}`.replace(`{${"characterId"}}`, encodeURIComponent(String(requestParameters.characterId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CharacterToJSON(requestParameters.character),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharacterDetailedResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCharactersCharacterIdPost(requestParameters: ApiCharactersCharacterIdPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CharacterDetailedResponse> {
        const response = await this.apiCharactersCharacterIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCharactersUserIdUserIdDeleteRaw(requestParameters: ApiCharactersUserIdUserIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CharacterDetailedResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling apiCharactersUserIdUserIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/characters/userId/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharacterDetailedResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCharactersUserIdUserIdDelete(requestParameters: ApiCharactersUserIdUserIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CharacterDetailedResponse> {
        const response = await this.apiCharactersUserIdUserIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCharactersUserIdUserIdGetRaw(requestParameters: ApiCharactersUserIdUserIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CharacterDetailedResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling apiCharactersUserIdUserIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/characters/userId/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharacterDetailedResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCharactersUserIdUserIdGet(requestParameters: ApiCharactersUserIdUserIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CharacterDetailedResponse> {
        const response = await this.apiCharactersUserIdUserIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCharactersUserIdUserIdPutRaw(requestParameters: ApiCharactersUserIdUserIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CharacterDetailedResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling apiCharactersUserIdUserIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/characters/userId/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CharacterToJSON(requestParameters.character),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharacterDetailedResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCharactersUserIdUserIdPut(requestParameters: ApiCharactersUserIdUserIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CharacterDetailedResponse> {
        const response = await this.apiCharactersUserIdUserIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
