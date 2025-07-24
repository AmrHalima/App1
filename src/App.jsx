import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/portfolio", element: <Portfolio /> },
                { path: "/contact", element: <Contact /> },
                { path: "*", element: <h2>404 Page Not Found</h2> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
