import { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../../auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';
import { createUser } from '../../services/userService'
import { UserIdContext } from '../../contexts/UserIdContext';


const Home = () => {
    
    const { getAccessTokenSilently, user } = useAuth0();

    const { id, setId, userToken, setUserToken } = useContext(UserIdContext);

    useEffect(() => {
        
    })

    async function fetchToken() {
        const token = await getAccessTokenSilently();

        let newUser = {
            oauthId: user.sub,
            email: user.email,
            displayName: user.displayName
        }

        // if the user chooses login with google
        if(user.given_name) newUser.firstName = user.given_name;
        if(user.family_name) newUser.lastName = user.family_name;
        if(user.picture) newUser.image = user.picture;
        const userId = createUser(newUser, token);
        console.log('se stava id')
        setId(userId);
        console.log('se stava token')
        setUserToken(token);
        // stavi tuka u context id i usertoken
        
    }

    let routes = (
        <Switch>
            {/** Protected routes will go here */}

        </Switch>
    )

    return (
        <>
        {routes}
        </>
    )
}

export default Home;