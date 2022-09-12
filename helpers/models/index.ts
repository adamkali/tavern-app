import { User, UserDetailedResponse, UsersDetailedResponse } from './Users';
import { Character, CharacterDetailedResponse, CharactersDetailedResponse } from './Characters';
import { Plot, PlotDetailedResponse, PlotsDetailedResponse } from './Plots';
import {
    AuthToken,
    TokenDetailedResponse,
    AuthTokenActivation,
    AuthRequest,
    LoginRequest
} from './Authentication';
import {
    Tag,
    TagsDetailedResponse,
    PlayerPreference,
    PlayerPreferencesDetailedResponse,
} from './Enums';

// export all imported classes as a single object, so that they can be imported as a single module
export {
    User,
    UserDetailedResponse,
    UsersDetailedResponse,
    Character,
    CharacterDetailedResponse,
    CharactersDetailedResponse,
    Plot,
    PlotDetailedResponse,
    PlotsDetailedResponse,
    AuthToken,
    TokenDetailedResponse,
    AuthTokenActivation,
    AuthRequest,
    LoginRequest,
    Tag,
    TagsDetailedResponse,
    PlayerPreference,
    PlayerPreferencesDetailedResponse,
};

export const EmptyGuid = '00000000000000000000000000000000';
