import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

// JSX routes definition approach
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/products" element={<Products/>}/>
//     </Route>
// )
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/products', element: <Products/>},
            {path: '/products/:productId', element: <ProductDetailPage/>},
        ],
    },
])

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
