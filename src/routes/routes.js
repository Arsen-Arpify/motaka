import {HomePage} from "../components/homePage";
import {SignUp} from "../components/signUp";
import {SignIn} from "../components/signIn";
import {JobListing} from "../components/jobListing";

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
    {
        path: "/JobListing",
        exact: true,
        page: () => <JobListing/>,
    },

];
