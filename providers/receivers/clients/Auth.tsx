import axios, { AxiosRequestHeaders } from 'axios';
import Providable from '../../functors/Provideable';
import { constructHeader } from '../Authenticate';
import { AuthRequest, AuthToken, LoginRequest } from '../models';
import TavernClient from '../TavernReceiver';

export default class UserClient extends TavernClient<AuthToken> {
    headers: AxiosRequestHeaders = { Authentication: '' };

    constructor() {
        super('', new AuthToken());
    }

    async Login(p: { body: LoginRequest }): Promise<AuthToken> {
        const response = await axios.post<Providable<AuthToken>>(
            this.baseUrl + '/login',
            p.body
        );
        return response.data.provide();
    }

    async Register(p: { body: AuthRequest }): Promise<AuthToken> {
        const response = await axios.post<Providable<AuthToken>>(
            this.baseUrl + '/signup',
            p.body
        );
        return response.data.provide();
    }

    async Verify(p: { body: AuthRequest }): Promise<AuthToken> {
        const response = await axios.post<Providable<AuthToken>>(
            this.baseUrl + '/verify',
            p.body
        );
        return response.data.provide();
    }
}
