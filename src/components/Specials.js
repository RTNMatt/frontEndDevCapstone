import Specials2 from "../pictures/Dish icon.svg"


const Specials = () =>{
    return(
        <div className="specials-container">
            <div className="specials-card">
                <div className="specials-greek"/>
                <div>
                    <div className="specials-title">
                        <h3>Greek Salad</h3>
                        <h4>$12.99</h4>
                    </div>
                    <>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </>
                    <div className="order-delivery">
                        <h5>Order Delivery</h5>
                        <img src={Specials2} alt=""/>
                    </div>

                </div>
            </div>
            <div className="specials-card">
                <div className="specials-bruchetta"/>
                <div>
                    <div className="specials-title">
                        <h3>Bruchetta</h3>
                        <h4>$5.99</h4>
                    </div>
                    <>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    </>
                    <div className="order-delivery">
                        <h5>Order Delivery</h5>
                        <img src={Specials2} alt=""/>
                    </div>

                </div>
            </div>
            <div className="specials-card">
                <div className="specials-lemon"/>
                <div>
                    <div className="specials-title">
                        <h3>Lemon Dessert</h3>
                        <h4>$5.00</h4>
                    </div>
                    <>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </>
                    <div className="order-delivery">
                        <h5>Order Delivery</h5>
                        <img src={Specials2} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
}




export default Specials;