import TavernData from './TavernData';

export default class DetailedResponse<
    T extends TavernData | TavernData[]
> {
    data: T;
    successful: boolean;
    message: string;

    constructor(data: undefined | any = {}) {
        this.data = data.data ?? ({} as T);
        this.successful = data.successful ?? false;
        this.message = data.message ?? 'NO MESSAGE';
    }
}
