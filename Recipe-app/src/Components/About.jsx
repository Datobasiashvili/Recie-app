import { Link, useOutletContext } from "react-router-dom";
import Navbar from "./Navbar";

import '../styles/About.css'

export default function About() {
    const { recipeData } = useOutletContext();

    return (
        <>
            <Navbar data={recipeData} />
            <div className="about-us-container">
                <div className="about-us">
                    <div className="information">
                        <h1>About us</h1>
                        <p> Welcome to <Link className='homepage-link' to='/'><i><span id='dato'>Dato's</span> Recipe App</i></Link>, your go-to destination for delicious, easy-to-follow recipes that make cooking fun and enjoyable! Whether you're a seasoned chef or a beginner in the kitchen, we’ve got something for everyone.
                        Our mission is to inspire and empower home cooks by providing a wide variety of recipes from all around the world. From quick weeknight dinners to special holiday meals, our app has you covered with clear instructions, helpful tips, and nutritional information to make cooking simpler and more enjoyable. </p>
                    </div>

                    <div className="offering">
                        <h2>What We Offer: </h2>
                        <li>
                            <b>Thousands of Recipes:</b> Explore a diverse range of dishes, including appetizers, main courses, desserts, and more.
                        </li>
                        <li>
                            <b>Personalized Recommendations:</b> Get tailored recipe suggestions based on your preferences and dietary needs.
                        </li>
                        <li>
                            <b>Step-by-Step Instructions: </b> Clear, easy-to-follow cooking guides with photos to ensure your meal turns out just right.
                        </li>
                        <li>
                            <b>Community Support:</b> Share your favorite recipes, tips, and ideas with fellow home cooks.
                        </li>
                        <br></br><br></br>
                        <p>At <Link to='/' className="homepage-link"><i><span id='dato'>Dato's</span> Recipe App</i></Link>, we believe cooking should be a joyful experience, whether you’re cooking for yourself or sharing a meal with loved ones. Join us on this culinary journey, and let’s make cooking easier and more fun together!</p>
                    </div>
                </div>
            </div>
        </>
    )
}