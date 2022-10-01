import AsyncStorage from '@react-native-async-storage/async-storage';
import * as TavernProfileModels from './models';

// make a isLogged in function to check if the AuthToken is in the storage
// the token's key is "UserToken"
export const isLoggedIn = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from AsyncStorage as TavernProfileModels.AuthToken
        let res: TavernProfileModels.AuthToken;
        const token = await AsyncStorage.getItem('UserToken');
        if (token !== null || token !== undefined) {
            res = new TavernProfileModels.AuthToken(token);
            if (res.active) {
                resolve(true);
            } else {
                reject('User Not Activated');
            }
        } else reject('Not stored yet');
    });
};

// make a function that stores an AuthToken into the AsyncStorage
// the Token's key is "UserToken"
export const storeToken = async (
    token: TavernProfileModels.AuthToken
): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Store the token in AsyncStorage
        AsyncStorage.setItem('UserToken', JSON.stringify(token));
        resolve();
    });
};

// make a constuct header function
// get the current AuthToken from AsyncStorage
// the Token's key is "UserToken"
// it should create a header of { 'Authorization' : 'Bearer ' + data.AuthHash }
export const constructHeader = async (): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        // Get the AuthToken from AsyncStorage
        let header: string;
        const token = await AsyncStorage.getItem('UserToken');
        if (token !== null || token !== undefined) {
            // make a new AuthToken
            const authToken = new TavernProfileModels.AuthToken(token);
            header = 'Bearer ' + authToken.auth_hash;
            resolve(header);
        } else reject('Could not load AsyncStorage');
    });
};

// check if the app is being used for the first time
// the key is "FirstTime"
export const isFirstTime = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from AsyncStorage as TavernProfileModels.AuthToken
        let res: boolean;
        const token = await AsyncStorage.getItem('FirstTime');
        if (token !== null || token !== undefined) {
            res = JSON.parse(token ?? '');
            resolve(res);
        } else reject('Not stored yet');
    });
};

// set the first time to be 'Set Up'
// the key is "FirstTime"
export const setFirstTime = async (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from AsyncStorage as TavernProfileModels.AuthToken
        await AsyncStorage.setItem('FirstTime', JSON.stringify(true));
        resolve();
    });
};
