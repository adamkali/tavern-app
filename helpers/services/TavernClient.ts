import * as TavernProfileModels from '../models/index';
import { TavernEndpoint } from '../endpoints';

// Create a class that will be used for an API Client
// This class will be set with the base URL of the API
// The base Url will be the imported TavernEndpoint
export default class TavernProfileClient {

    // Create a constructor that will take in a JSON object
    // This constructor will set the baseUrl and the endpoint
    // The baseUrl will be the imported TavernEndpoint
    // The endpoint will be the JSON object
    constructor() {
        this.baseUrl = TavernEndpoint;
    }

    logData(obj: any) {
        console.log(obj);
        return obj;
    }

    // Create a property that will be used for the baseUrl
    // This property will be set to the imported TavernEndpoint
    baseUrl: string;

    // Create a method that will be used for getting the baseUrl
    // This method will return the baseUrl
    getBaseUrl(): string {
        return this.baseUrl;
    }

    headers: any = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Allow-Headers": "*",
    }

    /**
     * getUsers(): Promise<TavernProfileModels.UsersDetailedResponse>
     * @example getUsers();
     * @returns Promise that will resolve to a UserDetailedResponse
     */
    // Create a method that will be used to get a list of users
    // This method will use fetch to make a GET request to the baseUrl
    // The method will return a Promise that will resolve to a list of Users
    // The method will connect to the 'users' endpoint
    getUsers(): Promise<TavernProfileModels.UsersDetailedResponse> {
        return fetch(this.baseUrl + 'users', { headers: this.headers })
            .then(response => this.logData(response.json()))
    }

    /**
     * postUser(params: any): Promise<TavernProfileModels.UserDetailedResponse>
     * @example postUser({body: new User()});
     * @param params JSON object that will be used to post a new User to the API
     * @returns A Promise that will resolve to a UserDetailedResponse
     */
    // Create a method that will Post a new user
    // This method will use fetch to make a POST request to the baseUrl
    // The method will return a Promise that will resolve to a UserDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a a User object that will be used to create a new user
    // The method will connect to the 'users' endpoint
    // params will have a body parameter that will be a User object
    postUser(params: any): Promise<TavernProfileModels.UserDetailedResponse> {
        return fetch(this.baseUrl + 'users', {
            method: 'POST',
            body: JSON.stringify(params.body),
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }).then(response => this.logData(response.json()))
    }


    /**
     * getUserById(params: any): Promise<TavernProfileModels.UserDetailedResponse>
     * @example getUserByUserId({userId: '00000000-0000-0000-0000-0000000000000'});
     * @param params a JSON object that will get a user from the API
     * @returns Promise that will resolve to a UserDetailedResponse
     */
    // Create a method that will get a user by id
    // This method will use fetch to make a GET request to the baseUrl
    // The method will return a Promise that will resolve to a UserDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called userId that will be used to get a user by id
    // The method will connect to the 'users' endpoint
    // params will have a path parameter that will be a string that will be the userId
    public getUserById(params: any): Promise<TavernProfileModels.UserDetailedResponse> {
        return fetch(this.baseUrl + 'users/' + params.userId, { headers: this.headers })
            .then(response => this.logData(response.json()))
    }

    /**
     * updateUserByUserId(params: any): Promise<TavernProfileModels.UserDetailedResponse>
     * @example updateUserByUserId(
     *              {
     *                  userId: '00000000-0000-0000-0000-0000000000000', 
     *                  body: new User(),
     *              });
     * @param params JSON object that will store the userId and the User object
     * @returns Promise that will resolve to UserDetailedResponse
     */
    // Create a method that will update a user
    // This method will use fetch to make a PUT request to the baseUrl
    // The method will return a Promise that will resolve to a UserDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called userId that will be used to update a user by id
    // params will contain a parameter called body that will be a User object that will be used to update a user
    // The method will connect to the 'users' endpoint
    // params will have a path parameter that will be a string that will be the userId
    // params will have a body parameter that will be a User object
    updateUserByUserId(params: any): Promise<TavernProfileModels.UserDetailedResponse> {
        return fetch(this.baseUrl + 'users/' + params.userId, {
            method: 'PUT',
            body: JSON.stringify(params.body),
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }).then(response => this.logData(response.json()))
    }

    /**
     * deleteUserById(params: any)
     * @example deleteUserById({userId: '00000000-0000-0000-0000-000000000000'})
     * @param params A JSON object that contains a parameter called userId
     * @returns This will retrun a promise that will resolve to a UserDetailedResponse
     */

    // Create a method that will delete a user
    // This method will use fetch to make a DELETE request to the baseUrl
    // The method will return a Promise that will resolve to a UserDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called userId that will be used to delete a user by id
    // The method will connect to the 'users' endpoint
    // params will have a path parameter that will be a string that will be the userId
    deleteUserById(params: any): Promise<TavernProfileModels.UserDetailedResponse> {
        return fetch(this.baseUrl + 'users/' + params.userId, {
            method: 'DELETE',
            headers: this.headers
        }).then(response => this.logData(response.json()))
    }

    /**
     * getCharactersByUserId
     * @example getCharactersByUserId({userId: '00000000-0000-0000-0000-000000000000'})
     * @param params JSON object with a userId and a character object
     * @returns a resolution to TavernProfileModels.CharacterDetailedResponse
     */

    // Create a method that will get a list of characters
    // This method will use fetch to make a GET request to the baseUrl
    // The method will return a Promise that will resolve to a CharactersDetailedResponse
    // The method will connect to the 'characters/userId/' endpoint
    // params will have a path parameter that will be a string that will be the userId
    // params will be a JSON object as {}
    getCharactersByUserId(params: any): Promise<TavernProfileModels.CharactersDetailedResponse> {
        return fetch(this.baseUrl + 'characters/' + params.userId + '/', { headers: this.headers })
            .then(response => this.logData(response.json()))
    }


    /** 
     * postCharacterByUserId(params: any): Promise<TavernProfileModels.CharacterDetailedResponse>
     * @example postCharacterByUserId({userId: '00000000-0000-0000-0000-000000000000', body: new Character()});
     * @param params JSON object that will be used to post a new Character to the API
     * @returns A Promise that will resolve to a CharacterDetailedResponse
    */
    // Create a method that will get a post a new character to the API
    // This method will use fetch to make a POST request to the baseUrl
    // The method will return a Promise that will resolve to a CharacterDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called userId that will be used to post a new character to a user in the database
    // params will contain a parameter called body that will be a Character object that will be used to post a new character to a user in the database
    // The method will connect to the 'characters/userId/' endpoint
    // params will have a path parameter that will be a string that will be the userId
    // params will have a body parameter that will be a Character object
    postCharacterByUserId(params: any): Promise<TavernProfileModels.CharacterDetailedResponse> {
        return fetch(this.baseUrl + 'characters/' + params.userId + '/', {
            method: 'POST',
            body: JSON.stringify(params.body),
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }).then(response => this.logData(response.json()))
    }

    /**
     * getCharacterById(params: any): Promise<TavernProfileModels.CharacterDetailedResponse>
     * @example getCharacterById({characterId: '00000000-0000-0000-0000-000000000000'}) 
     * @param params JSON object that will be used to get a character by characterId
     * @returns A Promise that will resolve to a CharacterDetailedResponse
     */
    // Create a method that will get a character by id
    // This method will use fetch to make a GET request to the baseUrl
    // The method will return a Promise that will resolve to a CharacterDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called characterId that will be used to get a character by id
    // The method will connect to the 'characters/' endpoint
    // params will have a path parameter that will be a string that will be the characterId
    getCharacterById(params: any): Promise<TavernProfileModels.CharacterDetailedResponse> {
        return fetch(this.baseUrl + 'characters/' + params.characterId, { headers: this.headers })
            .then(response => this.logData(response.json()))
    }

    /**
     * updateCharacterById(params: any): Promise<TavernProfileModels.CharacterDetailedResponse>
     * @example updateCharacterById({characterId: '00000000-0000-0000-0000-000000000000', body: new Character()})
     * @param params JSON object that will be used to update a character
     * @returns A Promise that will resolve to a CharacterDetailedResponse
     */

    // Create a method that will update a character by characterId
    // This method will use fetch to make a PUT request to the baseUrl
    // The method will return a Promise that will resolve to a CharacterDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called characterId that will be used to update a character by id
    // params will contain a parameter called body that will be a Character object that will be used to update a character
    // The method will connect to the 'characters/' endpoint
    // params will have a path parameter that will be a string that will be the characterId
    // params will have a body parameter that will be a Character object
    updateCharacterById(params: any): Promise<TavernProfileModels.CharacterDetailedResponse> {
        return fetch(this.baseUrl + 'characters/' + params.characterId, {
            method: 'PUT',
            body: JSON.stringify(params.body),
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }).then(response => this.logData(response.json()))
    }

    /**
     * deleteCharacterById(params: any): Promise<TavernProfileModels.CharacterDetailedResponse>
     * @example deleteCharacterById({characterId: '00000000-0000-0000-0000-000000000000'})
     * @param params JSON object that will be used to delete a character
     * @returns A Promise that will resolve to a CharacterDetailedResponse
     */
    // Create a method that will delete a character by characterId
    // This method will use fetch to make a DELETE request to the baseUrl
    // The method will return a Promise that will resolve to a CharacterDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called characterId that will be used to delete a character by id
    // The method will connect to the 'characters/' endpoint
    // params will have a path parameter that will be a string that will be the characterId
    deleteCharacterById(params: any): Promise<TavernProfileModels.CharacterDetailedResponse> {
        return fetch(this.baseUrl + 'characters/' + params.characterId, {
            method: 'DELETE',
            headers: this.headers
        }).then(response => this.logData(response.json()))
    }

    /**
     * getPlotsByUserId(params: any): Promise<TavernProfileModels.PlotsDetailedResponse>
     * @example getPlotsByUserId({userId: '00000000-0000-0000-0000-000000000000'})
     * @param params JSON object that will be used to get a user's plots
     * @returns A Promise that will resolve to a PlotsDetailedResponse
     */
    // Create a method that will get a user's plots
    // This method will use fetch to make a GET request to the baseUrl
    // The method will return a Promise that will resolve to a PlotsDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called userId that will be used to get a user's plots
    // The method will connect to the 'plots/userId/' endpoint
    // params will have a path parameter that will be a string that will be the userId
    getPlotsByUserId(params: any): Promise<TavernProfileModels.PlotsDetailedResponse> {
        return fetch(this.baseUrl + 'plots/userId/' + params.userId, {
            method: 'GET',
            headers: this.headers
        }).then(response => response.json())
    }

    /**
     * postPlotByUserId(params: any): Promise<TavernProfileModels.PlotDetailedResponse>
     * @example postPlotByUserId({userId: '00000000-0000-0000-0000-000000000000', body: new Plot()})
     * @param params JSON object that will be used to post a new plot to a user in the database
     * @returns A Promise that will resolve to a PlotDetailedResponse
     * @throws Will throw an error if the userId is not provided
     * @throws Will throw an error if the body is not provided
     */
    // Create a method that will post a new plot to a user in the database
    // This method will use fetch to make a POST request to the baseUrl
    // The method will return a Promise that will resolve to a PlotDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called userId that will be used to post a new plot to a user in the database
    // params will contain a parameter called body that will be a Plot object that will be used to post a new plot to a user in the database
    // The method will connect to the 'plots/userId/' endpoint
    // params will have a path parameter that will be a string that will be the userId
    // params will have a body parameter that will be a Plot object
    postPlotByUserId(params: any): Promise<TavernProfileModels.PlotDetailedResponse> {
        if (!params.userId) {
            throw new Error('userId is required');
        }
        if (!params.body) {
            throw new Error('body is required');
        }
        return fetch(this.baseUrl + 'plots/userId/' + params.userId, {
            method: 'POST',
            body: JSON.stringify(params.body),
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }).then(response => this.logData(response.json()))
    }

    /**
     * getPlotById(params: any): Promise<TavernProfileModels.PlotDetailedResponse>
     * @example getPlotById({plotId: '00000000-0000-0000-0000-000000000000'})
     * @param params JSON object that will be used to get a plot by id
     * @returns A Promise that will resolve to a PlotDetailedResponse
     * @throws Will throw an error if the plotId is not provided
     */
    // Create a method that will get a plot by id
    // This method will use fetch to make a GET request to the baseUrl
    // The method will return a Promise that will resolve to a PlotDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called plotId that will be used to get a plot by id
    // The method will connect to the 'plots/' endpoint
    // params will have a path parameter that will be a string that will be the plotId
    getPlotById(params: any): Promise<TavernProfileModels.PlotDetailedResponse> {

        // have a check that will throw an error if the plotId is not provided
        if (!params.plotId) {
            throw new Error('plotId is required');
        }
        return fetch(this.baseUrl + 'plots/' + params.plotId, {
            method: 'GET',
            headers: this.headers
        }).then(response => this.logData(response.json()))
    }

    /** 
     * updatePlotById(params: any): Promise<TavernProfileModels.PlotDetailedResponse>
     * @example updatePlotById({plotId: '00000000-0000-0000-0000-000000000000', body: new Plot()})
     * @param params JSON object that will be used to update a plot by id
     * @returns A Promise that will resolve to a PlotDetailedResponse
     * @throws Will throw an error if the plotId is not provided
     * @throws Will throw an error if the body is not provided
    */
    // Create a method that will update a plot by id
    // This method will use fetch to make a PUT request to the baseUrl
    // The method will return a Promise that will resolve to a PlotDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called plotId that will be used to update a plot by id
    // params will contain a parameter called body that will be a Plot object that will be used to update a plot by id
    // The method will connect to the 'plots/' endpoint
    // params will have a path parameter that will be a string that will be the plotId
    // params will have a body parameter that will be a Plot object
    updatePlotById(params: any): Promise<TavernProfileModels.PlotDetailedResponse> {
        if (!params.plotId) {
            throw new Error('plotId is required');
        }
        if (!params.body) {
            throw new Error('body is required');
        }
        return fetch(this.baseUrl + 'plots/' + params.plotId, {
            method: 'PUT',
            body: JSON.stringify(params.body),
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }).then(response => this.logData(response.json()))
    }

    /** 
     * deletePlotById(params: any): Promise<TavernProfileModels.PlotDetailedResponse>
     * @example deletePlotById({plotId: '00000000-0000-0000-0000-000000000000'})
     * @param params JSON object that will be used to delete a plot by id
     * @returns A Promise that will resolve to a PlotDetailedResponse
     * @throws Will throw an error if the plotId is not provided
    */
    // Create a method that will delete a plot by id
    // This method will use fetch to make a DELETE request to the baseUrl
    // The method will return a Promise that will resolve to a PlotDetailedResponse
    // This will take a parameter called params that will be a JSON object as {}
    // params will contain a parameter called plotId that will be used to delete a plot by id
    // The method will connect to the 'plots/' endpoint
    // params will have a path parameter that will be a string that will be the plotId
    deletePlotById(params: any): Promise<TavernProfileModels.PlotDetailedResponse> {
        if (!params.plotId) {
            throw new Error('plotId is required');
        }
        return fetch(this.baseUrl + 'plots/' + params.plotId, {
            method: 'DELETE',
            headers: this.headers
        }).then(response => this.logData(response.json()))
    }
}