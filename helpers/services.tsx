import * as Requests from './requests';

export const UserService = {
    getAllUsers: Requests.getAllUsers,
    postAUser: Requests.postAUser,
    getUserByID: Requests.getUserByID,
    updateUser: Requests.updateUser,
};
