import React, {useState} from "react";
import { useFormik } from "formik";

import * as Yup from 'yup';
import { Link } from "react-router-dom";



const Booking = () =>{

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const formik = useFormik({
        initialValues: {
          reservationName: "",
          email: "",
          type: "",
          date: "",
        },
        onSubmit: () => {
            <Link to="/confirmed"></Link>
        },
        validationSchema: Yup.object({
          reservationName: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          type: Yup.string().optional(),
        }),
      });

      const handleChange = (e) => {
        setDate(e);
       }

    return(
        <main className="booking-page">
            <section className="booking-form">
                    <h1>Reservation Details</h1>
                    <form onSubmit={formik.handleSubmit}>
                            <div isInvalid={formik.errors.reservationName && formik.touched.reservationName}>
                                <label htmlFor="reservationName">Reservation Name: </label>
                                <input id="reservationName" name="reservationName"
                                {...formik.getFieldProps("reservationName")}/>
                                <>{formik.errors.reservationName}</>
                            </div>
                            <div isInvalid={formik.errors.email && formik.touched.email}>
                                <label htmlFor="email">Email Address: </label>
                                <input
                                id="email"
                                name="email"
                                type="email"
                                {...formik.getFieldProps("email")}
                                />
                                <>{formik.errors.email}</>
                            </div>
                            <div>
                                <label htmlFor="type">Occasion: </label>
                                <select id="type" name="type"
                                {...formik.getFieldProps("type")}
                                >
                                    <option value=""></option>
                                <option value="anniversary">Anniversary</option>
                                <option value="birthday">Birthday</option>
                                <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dateFormat">Select a Date </label>
                                <input
                                id="book-date"
                                value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                            </div>
                            <div>
                                <label >Select a Time </label>
                                <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                        <option value="">Select a Time</option>
                                        <option value="12:00">12:00</option>
                                        <option value="1:00">1:00</option>
                                        <option value="2:00">2:00</option>
                                        <option value="3:00">3:00</option>
                                        <option value="4:00">4:00</option>
                                        <option value="5:00">5:00</option>
                                        <option value="6:00">6:00</option>
                                        <option value="7:00">7:00</option>
                                        <option value="8:00">8:00</option>
                                    </select>
                            </div>
                    </form>
                    <Link to="/confirmed">
                        <button>Submit Reservation</button>
                    </Link>
            </section>
            <section>
                <div className="reserve-img" />
            </section>
        </main>
    );
}




export default Booking;