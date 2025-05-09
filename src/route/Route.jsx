import {createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import FindJob from "../components/Find_Job/FindJob";
import ApplyingJob from "../Pages/ApplyingJob";
import FavoriteJobs from "../Pages/FavoriteJobs";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

  


const router = createBrowserRouter([
    {
        path:'/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'applyIngjob',
                element: <ApplyingJob></ApplyingJob>
            },
            {
                path: 'findjob',
                element: <FindJob></FindJob>
            },
            {
                path:'favouritejobs',
                element: <FavoriteJobs></FavoriteJobs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
        
    },
   
    
])

export default router;
