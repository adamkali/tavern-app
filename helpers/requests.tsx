import * as TavernModels from './models';
import { TavernEndpoint } from './endpoints'

export async function  getAllUsers(): Promise<TavernModels.UsersDetailedResponse> {
    const headers = {
        'Accept': 'application/json'
    }
    const response = await fetch(TavernEndpoint + 'users', { headers: headers});
    return response.json();
}; 

export async function postAUser(params: {
    body: TavernModels.User,
} = {} as any): Promise<TavernModels.UserDetailedResponse> {
    return new Promise((resolve, reject) => {
        const url = TavernEndpoint + 'users';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

        fetch(
            url, { 
                headers: headers,
                body: JSON.stringify(params.body),
                method: 'POST',
            }
        ).then(
            (res) => {
                resolve(new TavernModels.UserDetailedResponse(res.json()));
            },
            (err) => {
                reject(err);
            }
        )
    });
};

export async function getUserByID(params: {
    userId: string,
} = {} as any): Promise<TavernModels.UserDetailedResponse> {
    return new Promise((resolve, reject) => {
        const url: string = TavernEndpoint + 'users/' + params.userId;
        const headers = {
            'Accept': 'application/json',
        }

        fetch(
            url, { 
                headers: headers,
                method: 'GET',
            }
        ).then(
            (res) => {
                resolve(new TavernModels.UserDetailedResponse(res.json()));
            },
            (err) => {
                reject(err);
            }
        ).catch(
            (reason) => {
                reject(console.warn(reason))
            }
        )
    });
};

export async function updateUser(params: {
    userId: string
    body: TavernModels.User,
} = {} as any): Promise<TavernModels.UserDetailedResponse> {
    return new Promise((resolve, reject) => {
        const url = TavernEndpoint + 'users/' + params.userId;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

        fetch(
            url, { 
                headers: headers,
                body: JSON.stringify(params.body),
                method: 'POST',
            }
        ).then(
            (res) => {
                resolve(new TavernModels.UserDetailedResponse(res.json()));
            },
            (err) => {
                reject(err);
            }
        ).catch(
            (reason) => {
                console.warn(reason);
            }
        )
    });
};
