import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Bikes from '../../Pages/Bikes/Bikes';
import AllBuyers from '../../Pages/Dashboard/Admin/AllBuyers';
import AllSellers from '../../Pages/Dashboard/Admin/AllSellers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from '../../Pages/Dashboard/Seller/AddProduct';
import MyProducts from '../../Pages/Dashboard/Seller/MyProducts';
import MyOrders from '../../Pages/Dashboard/User/MyOrders';
import Blogs from '../../Pages/Home/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

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
                element: <Dashboard></Dashboard>

            },

            {
                path: '/dashboard/myorder',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute> <AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute> <AddProduct></AddProduct> </SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute> <MyProducts></MyProducts> </SellerRoute>
            }
        ]
    }

])
export default router;