import { Auth } from 'aws-amplify';

export const signUp = async (formData) => {
    const { email, password, address, name, birthdate } = formData;

    try {
        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
                name,
                email,
                address,
                birthdate
            },
            autoSignIn: {
                enabled: true,
            }
        });
        console.log(user);
        return user;
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export const signIn = async (email, password) => {
    try {
        const user = await Auth.signIn(email, password);
        console.log(user);
        return user;
    } catch (error) {
        console.log('error signing in', error);
    }
}

export const signOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export const userIsLoggedIn = async () => {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
}

export const verifyAccount = async (email, code) => {
    try {
        await Auth.confirmSignUp(email, code);
    } catch (error) {
          console.log('error confirming sign up', error);
    }
}