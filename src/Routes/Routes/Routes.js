import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Bikes from '../../Pages/Bikes/Bikes';
import MyOrders from '../../Pages/Dashboard/User/MyOrders';
import Blogs from '../../Pages/Home/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound></NotFound>

    },
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Bikes></Bikes></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
            }


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
    }

])
export default router;