import { AxiosRequestHeaders } from 'axios';
import { constructHeader } from '../Authenticate';
import { TavernTypes } from '../models';
import TavernClient from '../TavernReceiver';

type Character = TavernTypes.Character;

export default class CharacterClient extends TavernClient<Character> {
    headers: AxiosRequestHeaders = { Authentication: '' };

    constructor() {
        super('auth/Character', {} as Character);
        constructHeader().then((header) => {
            this.headers = { Authentication: header };
        });
    }
}
