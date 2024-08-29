import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingPage from "./BookingPage";
import Reviews from "./Reviews";
import React from "react";

const Main = () =>{
    return(
        <main>
            <div className="review-container">
                <div className="review-comment">
                <Reviews />
                <p>The food was good but the view and decor really bring you in to make everything come together.</p>
                </div>
                <div className="review-comment">
                <Reviews />
                <p>I couldn't of asked for better service than from Adrian!</p>
                </div>
                <div className="review-comment">
                <Reviews />
                <p>I made a reservation for an anniversary and they surprised us with a cake and a special bottle of wine! You just can't find people who care like this anymore.</p>
                </div>
            </div>

            <Routes> 
                <Route path="/" element={<Header/>}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}




export default Main;