import { getUser, logout } from './reducer';

export function logoutUser() {
    return async function (dispatch) {
        dispatch(logout());
    };
}

export async function getUserData(token) {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();

    return data;
}

export async function loginUser(email, password) {

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    //localStorage.setItem('token', data.token);


    //dispatch(getUserData());
    return data
}

// TODO : Voir la librairie redux-persist pour le rememberMe

export async function updateUser(firstName, lastName, token) {

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
    });
    const data = await response.json();

    return data;

}