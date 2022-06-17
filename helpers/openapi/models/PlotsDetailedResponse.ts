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
    Plot,
    PlotFromJSON,
    PlotFromJSONTyped,
    PlotToJSON,
} from './Plot';

/**
 * 
 * @export
 * @interface PlotsDetailedResponse
 */
export interface PlotsDetailedResponse {
    /**
     * 
     * @type {Array<Plot>}
     * @memberof PlotsDetailedResponse
     */
    data?: Array<Plot> | null;
    /**
     * 
     * @type {boolean}
     * @memberof PlotsDetailedResponse
     */
    succsessful?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PlotsDetailedResponse
     */
    message?: string;
}

export function PlotsDetailedResponseFromJSON(json: any): PlotsDetailedResponse {
    return PlotsDetailedResponseFromJSONTyped(json, false);
}

export function PlotsDetailedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotsDetailedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(PlotFromJSON)),
        'succsessful': !exists(json, 'succsessful') ? undefined : json['succsessful'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function PlotsDetailedResponseToJSON(value?: PlotsDetailedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(PlotToJSON)),
        'succsessful': value.succsessful,
        'message': value.message,
    };
}

