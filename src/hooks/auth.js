import {useState, useEffect} from 'react';
import { userIsLoggedIn } from '../modules/auth';

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await userIsLoggedIn();
             
                if(userData) {
                    setUser(userData);
                }
            } catch(error) {
                console.log({error});
            }
        }

        fetchUser();
    }, []);

    useEffect(() => {
        if(user) setIsLoggedIn(true);
        if(!user) setIsLoggedIn(false);
    }, [user]);

    return {
        user,
        isLoggedIn
    }
}