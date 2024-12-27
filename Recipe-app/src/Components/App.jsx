import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate} from "react-router-dom";

//styles
import '../styles/App.css';

//Components
import FetchData from "./FetchData";
import Recipe from "./Recipe";
import Login from "./Login";
import Favorites from "./Favorites";
import About from "./About";

const router = createBrowserRouter(createRoutesFromElements(
        <>  
            <Route path='/' element={<Navigate to='home'/>} />

            <Route path = '/home' element={<FetchData />} >
                <Route path = 'favorites' element={<Favorites />} />
                <Route path = '/home/:recipeId/:recipeName' element={<Recipe />} />
                <Route path = 'about' element={< About />} /> 
                <Route path = 'login' element={<Login />} /> 
            </Route>

              
        </>
));

function App(){

    return(
        <RouterProvider router={router} />
    );
}


export default App;