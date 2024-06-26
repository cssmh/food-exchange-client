import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Component/Home";
import ErrorPage from "../Component/ErrorPage";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import MyProfile from "../Component/MyProfile";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import MyFoods from "../Pages/MyFoods/MyFoods";
import MyPending from "../Pages/MyPending/MyPending";
import { getFood, getMyPending } from "../api/Foods";
const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getFood(params.id),
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRoute>
            <MyPending />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Root;
