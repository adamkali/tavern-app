import { AxiosRequestHeaders } from 'axios';
import { constructHeader } from '../Authenticate';
import DetailedResponse, { Character } from '../models';
import TavernClient from '../TavernReceiver';

export default class CharacterClient extends TavernClient<Character> {
    headers: AxiosRequestHeaders = { Authentication: '' };

    constructor() {
        super('auth/Character', new Character());
        constructHeader().then((header) => {
            this.headers = { Authentication: header };
        });
    }
}
