import axios from 'axios';
import DetailedResponse from '../models';
import * as TavernProfileModels from '../models';
import { constructHeader } from './Authenticate';

export async function GetAuthUserByID(params: {
    id: string;
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.get(`/api/auth/user/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function PostAuthUserByID(params: {
    id: string;
    body: TavernProfileModels.User;
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.post(
        `/api/auth/user/${params.id}`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function DeleteAuthUserByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.delete(`/api/auth/user/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function AdminGetAll(): Promise<
    DetailedResponse<TavernProfileModels.User[]>
> {
    const response = await axios.get(`/api/admin/user`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.User[]>(
        response.data
    );
}

export async function GetQueue(): Promise<
    DetailedResponse<TavernProfileModels.User[]>
> {
    const response = await axios.get(`/api/auth/user/queue`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.User[]>(
        response.data
    );
}

export async function AuthGetAuthenticatedUserFull(): Promise<
    DetailedResponse<TavernProfileModels.User>
> {
    const response = await axios.get(`/api/auth/user`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function AuthGetAuthenticatedUserByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.get(`/api/auth/user/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function PostLogin({
    params,
}: {
    params: {
        body: TavernProfileModels.LoginRequest;
    };
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.post(`/api/auth/login`, params.body, {
        headers: { 'Content-Type': 'application/json' },
    });
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function PostRegister({
    params,
}: {
    params: {
        body: TavernProfileModels.AuthRequest;
    };
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.post(
        `/api/auth/register`,
        params.body,
        {
            headers: { 'Content-Type': 'application/json' },
        }
    );
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function PostVerify({
    params,
}: {
    params: {
        body: TavernProfileModels.VerifyRequest;
    };
}): Promise<DetailedResponse<TavernProfileModels.User>> {
    const response = await axios.post(`/api/auth/verify`, params.body, {
        headers: { 'Content-Type': 'application/json' },
    });
    return new DetailedResponse<TavernProfileModels.User>(
        response.data
    );
}

export async function AuthGetByCharID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Character>> {
    const response = await axios.get(
        `/api/auth/character/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.Character>(
        response.data
    );
}

export async function AuthPostCharacter({
    params,
}: {
    params: {
        body: TavernProfileModels.Character;
    };
}): Promise<DetailedResponse<TavernProfileModels.Character>> {
    const response = await axios.post(
        `/api/auth/character`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.Character>(
        response.data
    );
}

export async function AuthDeleteCharacter({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Character>> {
    const response = await axios.delete(
        `/api/auth/character/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.Character>(
        response.data
    );
}

export async function AuthGetAllCharacters(): Promise<
    DetailedResponse<TavernProfileModels.Character[]>
> {
    const response = await axios.get(`/api/auth/characters`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Character[]>(
        response.data
    );
}

export async function AuthGetPlotByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Plot>> {
    const response = await axios.get(`/api/auth/plot/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Plot>(
        response.data
    );
}

export async function AuthPostPlot({
    params,
}: {
    params: {
        body: TavernProfileModels.Plot;
    };
}): Promise<DetailedResponse<TavernProfileModels.Plot>> {
    const response = await axios.post(`/api/auth/plot`, params.body, {
        headers: {
            'Content-Type': 'application/json',
            Authentication: await constructHeader(),
        },
    });
    return new DetailedResponse<TavernProfileModels.Plot>(
        response.data
    );
}

export async function AuthDeletePlot({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Plot>> {
    const response = await axios.delete(`/api/auth/plot/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Plot>(
        response.data
    );
}

export async function AuthGetAllPlots(): Promise<
    DetailedResponse<TavernProfileModels.Plot[]>
> {
    const response = await axios.get(`/api/auth/plots`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Plot[]>(
        response.data
    );
}

export async function AuthGetUserRelationshipByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Relationship>> {
    const response = await axios.get(
        `/api/auth/relationship/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.Relationship>(
        response.data
    );
}

export async function AuthPostUserRelationship({
    params,
}: {
    params: {
        body: TavernProfileModels.Relationship;
    };
}): Promise<DetailedResponse<TavernProfileModels.Relationship>> {
    const response = await axios.post(
        `/api/auth/relationship`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.Relationship>(
        response.data
    );
}

export async function AuthDeleteUserRelationship({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Relationship>> {
    const response = await axios.delete(
        `/api/auth/relationship/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.Relationship>(
        response.data
    );
}

export async function AuthGetTagByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Tag>> {
    const response = await axios.get(`/api/auth/tag/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Tag>(response.data);
}

export async function AuthPostTag({
    params,
}: {
    params: {
        body: TavernProfileModels.Tag;
    };
}): Promise<DetailedResponse<TavernProfileModels.Tag>> {
    const response = await axios.post(`/api/auth/tag`, params.body, {
        headers: {
            'Content-Type': 'application/json',
            Authentication: await constructHeader(),
        },
    });
    return new DetailedResponse<TavernProfileModels.Tag>(response.data);
}

export async function AuthDeleteTagByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Tag>> {
    const response = await axios.delete(`/api/auth/tag/${params.id}`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Tag>(response.data);
}

export async function AuthPostTagToUser({
    params,
}: {
    params: {
        body: TavernProfileModels.Tag;
    };
}): Promise<DetailedResponse<TavernProfileModels.Tag>> {
    const response = await axios.post(
        `/api/auth/tag/add`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.Tag>(response.data);
}

export async function AuthPostTagsToUser({
    params,
}: {
    params: {
        body: TavernProfileModels.Tag[];
    };
}): Promise<DetailedResponse<TavernProfileModels.Tag[]>> {
    const response = await axios.post(
        `/api/auth/tag/addAll`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.Tag[]>(
        response.data
    );
}

export async function AuthGetTags(): Promise<
    DetailedResponse<TavernProfileModels.Tag[]>
> {
    const response = await axios.get(`/api/auth/tags`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Tag[]>(
        response.data
    );
}

export async function AuthGetPlayerPrefrenceByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.PlayerPreference>> {
    const response = await axios.get(
        `/api/auth/playerPrefrence/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.PlayerPreference>(
        response.data
    );
}

export async function AuthPostPlayerPrefrence({
    params,
}: {
    params: {
        body: TavernProfileModels.PlayerPreference;
    };
}): Promise<DetailedResponse<TavernProfileModels.PlayerPreference>> {
    const response = await axios.post(
        `/api/auth/playerPrefrence`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.PlayerPreference>(
        response.data
    );
}

export async function AuthDeletePlayerPrefrenceByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.PlayerPreference>> {
    const response = await axios.delete(
        `/api/auth/playerPrefrence/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.PlayerPreference>(
        response.data
    );
}

export async function AuthPostPlayerPrefrenceToUser({
    params,
}: {
    params: {
        body: TavernProfileModels.PlayerPreference;
    };
}): Promise<DetailedResponse<TavernProfileModels.PlayerPreference>> {
    const response = await axios.post(
        `/api/auth/playerPrefrence/add`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.PlayerPreference>(
        response.data
    );
}

export async function AuthGetPrefrences(): Promise<
    DetailedResponse<TavernProfileModels.PlayerPreference[]>
> {
    const response = await axios.get(`/api/auth/playerPrefrences`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.PlayerPreference[]>(
        response.data
    );
}

export async function AdminChangeRole({
    params,
}: {
    params: {
        body: TavernProfileModels.RoleChangeRequest;
    };
}): Promise<DetailedResponse<TavernProfileModels.Role>> {
    const response = await axios.post(`/api/admin/role`, params.body, {
        headers: {
            'Content-Type': 'application/json',
            Authentication: await constructHeader(),
        },
    });
    return new DetailedResponse<TavernProfileModels.Role>(
        response.data
    );
}

export async function AuthGetRelationshipByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Relationship>> {
    const response = await axios.get(
        `/api/auth/relationship/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.Relationship>(
        response.data
    );
}

export async function AuthPostRelationship({
    params,
}: {
    params: {
        body: TavernProfileModels.Relationship;
    };
}): Promise<DetailedResponse<TavernProfileModels.Relationship>> {
    const response = await axios.post(
        `/api/auth/relationship`,
        params.body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authentication: await constructHeader(),
            },
        }
    );
    return new DetailedResponse<TavernProfileModels.Relationship>(
        response.data
    );
}

export async function AuthDeleteRelationshipByID({
    params,
}: {
    params: {
        id: string;
    };
}): Promise<DetailedResponse<TavernProfileModels.Relationship>> {
    const response = await axios.delete(
        `/api/auth/relationship/${params.id}`,
        {
            headers: { Authentication: await constructHeader() },
        }
    );
    return new DetailedResponse<TavernProfileModels.Relationship>(
        response.data
    );
}

export async function AuthGetRelationships(): Promise<
    DetailedResponse<TavernProfileModels.Relationship[]>
> {
    const response = await axios.get(`/api/auth/relationships`, {
        headers: { Authentication: await constructHeader() },
    });
    return new DetailedResponse<TavernProfileModels.Relationship[]>(
        response.data
    );
}
