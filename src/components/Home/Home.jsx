import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../../auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';
import { createUser } from '../../services/userService'


const Home = () => {
    
    const { getAccessTokenSilently, user } = useAuth0();

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