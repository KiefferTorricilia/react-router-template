import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from '../pages/HomePage'
import LoginPage from "../pages/loginPage";
import loginPage from "../pages/loginPage";
import ProfilePage from '../pages/ProfilePage'


export default function Router() {
    

    return(
        <BrowserRouter>

        <Routes>
            <Route index element={<HomePage/>} />
            <Route path={`profile/:name`} element={<ProfilePage/>} />
            <Route path='*' element={<ErrorPage/>}  />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>


        </BrowserRouter>
    )
}