import axios, { AxiosRequestHeaders } from 'axios';
import Providable from '../../functors/Provideable';
import { constructHeader } from '../Authenticate';
import DetailedResponse, { TavernTypes } from '../models';
import TavernClient from '../TavernReceiver';

type User = TavernTypes.User;

export default class UserClient extends TavernClient<User> {
    headers: AxiosRequestHeaders = { Authentication: '' };

    constructor() {
        super('auth/User', {} as User);
        constructHeader().then((header) => {
            this.headers = { Authentication: header };
        });
    }

    async GetUser(p: { id: string }): Promise<Providable<User>> {
        let params = {
            id: p.id,
            headers: this.headers,
        };
        return await super.get('', params);
    }

    async PostUser(p: { body: User }): Promise<Providable<User>> {
        let params = {
            body: p.body,
            headers: this.headers,
        };
        return await super.post('', params);
    }

    async DeleteUser(p: { id: string }): Promise<Providable<User>> {
        let params = {
            id: p.id,
            headers: this.headers,
        };
        return await super.delete('', params);
    }

    async UserQueue(): Promise<Providable<User[]>> {
        const response = await axios.get<DetailedResponse<User[]>>(
            this.baseUrl + '/UserQueue',
            { headers: this.headers }
        );
        return new Providable<User[]>(response.data);
    }

    async Me(): Promise<Providable<User>> {
        const response = await axios.get<DetailedResponse<User>>(
            this.baseUrl + '/full',
            { headers: this.headers }
        );
        return new Providable<User>(response.data);
    }

    async SeeUser(p: { id: string }): Promise<DetailedResponse<User>> {
        const response = await axios.get<DetailedResponse<User>>(
            this.baseUrl + '/full/' + p.id,
            { headers: this.headers }
        );
        return response.data;
    }
}
