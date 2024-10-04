import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../components/block/LayOut';  
import LandingPage from "../components/pages/auth/LandingPage"
import AboutPage from '../components/pages/auth/AboutPage';
import Counter from "../components/pages/auth/Counter"

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,  
        children: [
            {
                index: true,
                element: <LandingPage/>

            },
            {
                path: "/about",  
                element: <AboutPage />  
            },
            {
                path : "/counter",
                element : <Counter />
            }
        ]
    }
]);
