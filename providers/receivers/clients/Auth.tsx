import axios, { AxiosRequestHeaders } from 'axios';
import Providable from '../../functors/Provideable';
import { constructHeader } from '../Authenticate';
import { TavernTypes, TavernRequests } from '../models';
import TavernClient from '../TavernReceiver';
import DetailedResponse from '../models';

type AuthToken = TavernTypes.AuthToken;
type AuthRequest = TavernRequests.AuthRequest;
type LoginRequest = TavernRequests.LoginRequest;
type VerifyRequest = TavernRequests.VerifyRequest;

export default class AuthClient extends TavernClient<AuthToken> {
    headers: AxiosRequestHeaders = { Authentication: '' };

    constructor() {
        super('', {} as AuthToken);
    }

    async Login(params: {
        body: LoginRequest;
    }): Promise<Providable<AuthToken>> {
        const response = await axios.post<DetailedResponse<AuthToken>>(
            this.baseUrl + 'login',
            params.body
        );
        return new Providable<AuthToken>(response.data);
    }

    async Register(params: {
        body: AuthRequest;
    }): Promise<Providable<AuthToken>> {
        const response = await axios.post<DetailedResponse<AuthToken>>(
            this.baseUrl + 'register',
            params.body
        );
        return new Providable<AuthToken>(response.data);
    }

    async Verify(params: {
        body: VerifyRequest;
    }): Promise<Providable<AuthToken>> {
        const response = await axios.post<DetailedResponse<AuthToken>>(
            this.baseUrl + 'verify',
            params.body
        );
        return new Providable<AuthToken>(response.data);
    }
}
