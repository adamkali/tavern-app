import axios, { AxiosRequestHeaders } from 'axios';
import Providable from '../../functors/Provideable';
import { constructHeader } from '../Authenticate';
import DetailedResponse, { User } from '../models';
import TavernClient from '../TavernReceiver';

export default class UserClient extends TavernClient<User> {
    headers: AxiosRequestHeaders = { Authentication: '' };

    constructor() {
        super('auth/User', new User());
        constructHeader().then((header) => {
            this.headers = { Authentication: header };
        });
    }

    async GetUser(p: { id: string }): Promise<User> {
        let params = {
            id: p.id,
            headers: this.headers,
        };
        return await super.get('', params);
    }

    async PostUser(p: { body: User }): Promise<User> {
        let params = {
            body: p.body,
            headers: this.headers,
        };
        return await super.post('', params);
    }

    async DeleteUser(p: { id: string }): Promise<User> {
        let params = {
            id: p.id,
            headers: this.headers,
        };
        return await super.delete('', params);
    }

    async UserQueue(): Promise<User[]> {
        const response = await axios.get<Providable<User[]>>(
            this.baseUrl + '/UserQueue',
            { headers: this.headers }
        );
        return response.data.provide();
    }

    async Me(): Promise<User> {
        const response = await axios.get<Providable<User>>(
            this.baseUrl + '/full',
            { headers: this.headers }
        );
        return response.data.provide();
    }

    async SeeUser(p: { id: string }): Promise<User> {
        const response = await axios.get<Providable<User>>(
            this.baseUrl + '/full/' + p.id,
            { headers: this.headers }
        );
        return response.data.provide();
    }
}
