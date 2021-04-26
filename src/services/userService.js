import axios from '../axios/axios-config';

export const createUser = async(user, token) => {
    const res = await axios.post('/user/createUser', user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export const getUserById = async(url, token) => {
    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(res.data);
    return res.data;
}

