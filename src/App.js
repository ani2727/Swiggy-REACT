import React, {lazy, Suspense} from "react";
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./About" 
import Error from "./Error"
import Contact from "./Contact"
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Shimmer from "./components/Shimmer";

const AppLayout = () =>{
    return ( 
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const Cart = lazy(()=>import("./Cart"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path:"/about",
                element: <Suspense ><About /></Suspense>,
                errorElement: <Error />,
            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement: <Error />,
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />,
                errorElement: <Error />
            },
            {
                path:"/cart",
                element: <Suspense fallback={<Shimmer></Shimmer>}><Cart /></Suspense>,
                errorElement: <Error />,
            },
        ],
        errorElement: <Error></Error>
    },
    
]

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/> )