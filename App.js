import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Restaurants from "./Components/Restaurants";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import UserClass from "./Components/UserClass";
import LifeCycle from "./Components/LifeCycle";
import FunctionalComponentDiveDeep from "./Components/FunctionalComponentDiveDeep";
// import Instamart from "./Components/Instamart";

const Instamart = lazy(() => import("./Components/Instamart"));

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/user",
        element: <UserClass name="Sarvesh" location="Delhi" />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>   {/*We can also pass Shimmer in fallback */}
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/class-component/lifecycle",
        element: <LifeCycle />,
      },
      {
        path: "/functional-component/divedeep",
        element: <FunctionalComponentDiveDeep />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
