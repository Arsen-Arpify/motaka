import {HomePage} from "../components/homePage";
import {SignUp} from "../components/signUp";

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
];
