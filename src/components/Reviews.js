import React from "react";

const Reviews = () =>{
    const [user, setUser] = React.useState([]);

        /*used random user pull for creating review names/pictures at random*/
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
        .then((response) => response.json())
        .then((data) => setUser(data));
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    /*Return 5 star rating, name, picture or data pending based on fetch*/
    return Object.keys(user).length > 0 ?(
        <div className="review-card">
            <>
                <h3>☆☆☆☆☆</h3>
                <h4>{user.results[0].name.first}</h4>
            </>
            <div>
                <img src={user.results[0].picture.large} alt="" />
            </div>
        </div>
    ) : (
        <p>Data Pending</p>
    );
}




export default Reviews;