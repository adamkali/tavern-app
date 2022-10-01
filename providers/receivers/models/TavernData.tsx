import { EmptyGuid } from '.';

export default class TavernData {
    id: string = '00000000000000000000000000000000';
    name: string = 'Not Initialized';

    constructor({ id, name }: { id: string; name: string }) {
        this.id = id;
        this.name = name;
    }

    new(): TavernData {
        return new TavernData({ id: EmptyGuid, name: 'No Data' });
    }
}
