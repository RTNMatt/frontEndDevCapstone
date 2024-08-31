import ReviewsCard from "./ReviewsCard";

const Reviews = () =>{
    return(
        <div className="review-container">
            <div className="review-comment">
            <ReviewsCard />
            <p>The food was good but the view and decor really bring you in to make everything come together.</p>
            </div>
            <div className="review-comment">
            <ReviewsCard />
            <p>I couldn't of asked for better service than from Adrian!</p>
            </div>
            <div className="review-comment">
            <ReviewsCard />
            <p>I made a reservation for an anniversary and they surprised us with a cake and a special bottle of wine! You just can't find people who care like this anymore.</p>
            </div>
        </div>
    );
}




export default Reviews;