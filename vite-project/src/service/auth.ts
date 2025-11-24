import api from "./api";

type registerData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    roles: string;
}

export const register = async (data: registerData) => {
    const response = await api.post('/auth/register', data);
    console.log(response.data.user , "response from register");
    return response.data.user;
}

export const login = async (email : string, password : string) => {
    const response = await api.post('/auth/login', {email, password});
    return response.data;
}

export const getMyDetails = async () => {
    const response = await api.get('/auth/me');
    return response.data;
}