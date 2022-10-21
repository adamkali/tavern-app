import DetailedResponse, {
    EmptyGuid,
    TavernData,
} from '../receivers/models';

// This type should operate as Option in Rust
export default class Providable<T extends TavernData | TavernData[]> {
    // The value of the option
    private value: DetailedResponse<T>;
    // Whether the option has a value
    private hasValue: boolean;
    private errorValue: string | null;

    constructor(value: DetailedResponse<T>) {
        this.value = value;
        if (value.successful) {
            this.hasValue = true;
            this.errorValue = null;
        } else {
            this.hasValue = false;
            this.errorValue = value.message;
        }
    }

    // a method to get the value of the option
    // if the option has no value, return the default value
    provide(): T {
        if (this.hasValue) {
            return this.value.data;
        } else {
            return {} as T;
        }
    }

    check(): boolean {
        return this.errorValue === null;
    }

    // make a method to that makes a run function
    // for the monad
    run(func: (_: T) => any): Providable<T> {
        if (this.hasValue) {
            func(this.value.data);
            return this;
        } else {
            this.errorValue =
                'An error occurred, durring the run function';
            return this;
        }
    }

    error(): string | null {
        return this.errorValue;
    }

    search(id: string): TavernData {
        // make sure the data is an array
        if (Array.isArray(this.value.data)) {
            // search the array for the id
            let ret: TavernData = new TavernData({
                id: EmptyGuid,
                name: 'No Data',
            });
            const d = this.provide() as TavernData[];
            for (let i = 0; i < d.length; i++) {
                if (d[i].id === id) {
                    ret = d[i];
                }
            }
            if (ret.id === EmptyGuid) {
                throw new Error('No Data');
            } else {
                return ret;
            }
        } else {
            throw new Error('The data is not an array');
        }
    }
}
