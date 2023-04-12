import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../../../features/home/HomePage";
import AboutPage from "../../../features/about/AboutPage";
import ContactPage from "../../../features/contact/ContactPage";
import Login from "../../../features/account/Login";
import Register from "../../../features/account/Register";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />},
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
        ]
    }

])