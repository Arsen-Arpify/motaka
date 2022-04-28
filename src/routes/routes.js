import {HomePage} from "../components/homePage";
import {SignUp} from "../components/signUp";
import {SignIn} from "../components/signIn";

export const routes = [
    {
        path: "/",
        exact: true,
        page: () => <HomePage/>,
    },
    {
        path: "/SignUp",
        exact: true,
        page: () => <SignUp/>,
    },
    {
        path: "/SignIn",
        exact: true,
        page: () => <SignIn/>,
    },

];
