import axios from '../axios/axios-config';

export const createUser = async(user, token) => {
    const res = await axios.post('/user/createUser', user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

