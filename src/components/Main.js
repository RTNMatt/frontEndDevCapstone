import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingPage from "./BookingPage";

const Main = () =>{
    return(
        <main>
            hold main
            <Routes> 
                <Route path="/" element={<Header/>}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}




export default Main;