// create a base class for the client
// it should have a base url: /api
// it should have a Base model that is ./models/TavernData.tsx
// it should have a DetailedResponse model that is ./models/DetailedResponse.tsx

import axios, { AxiosRequestHeaders } from 'axios';
import Providable from '../functors/Provideable';
import DetailedResponse from './models/DetailedResponse';
import TavernData from './models/TavernData';
import { Endpoints } from '../endpoints';

// Then it should have a get, post, put, and delete function
export default class TavernClient<T extends TavernData> {
    // the base url
    baseUrl: string;
    baseUrls: string;

    constructor(baseUrl: string, baseModel: T) {
        this.baseUrl = Endpoints.TavernProfile + baseUrl;
        this.baseUrls = Endpoints.TavernProfile + baseModel + 's';
    }

    // get function
    // use axios to get the data from the url
    // return the data
    async get(
        url: string,
        params: { id: string; headers: AxiosRequestHeaders }
    ): Promise<T> {
        const response = await axios.get<Providable<T>>(
            this.baseUrl + url + '/' + params.id,
            { headers: params.headers }
        );
        return response.data.provide();
    }

    // post function
    // use axios to post the data to the url
    // have the body be the params object
    // return the data
    async post(
        url: string,
        params: { body: Object; headers: AxiosRequestHeaders }
    ): Promise<T> {
        const response = await axios.post<Providable<T>>(
            this.baseUrl + url,
            params.body,
            { headers: params.headers }
        );
        return response.data.provide();
    }

    // delete function
    // use axios to delete the data from the url
    // have the body be the params object
    // return the data
    async delete(
        url: string,
        params: { id: string; headers: AxiosRequestHeaders }
    ): Promise<T> {
        const response = await axios.delete<Providable<T>>(
            this.baseUrl + url + '/' + params.id,
            { headers: params.headers }
        );
        return response.data.provide();
    }
}
