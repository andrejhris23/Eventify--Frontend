import { getUserById } from '../services/userService';
import useSWR from 'swr';

const fetchWithToken = (url, token) => {
    return getUserById(url, token);
}

export const useUser = (id, token) => {
    const { data, error } = useSWR((id && token) ? [`/user/findUserById/${id}`, token] : null, fetchWithToken);

    return {
        currentUser: data,
        isLoadingData: !error && !data, // ako dvete se null seuste e loading
        isError: error
    }
}