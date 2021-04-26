import { createContext } from 'react';

export const UserIdContext = createContext({
    id: null,
    setId: () => {},
    userToken: null,
    setUserToken: () => {}
});