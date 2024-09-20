import React from "react";

export default function Box(){

    let password = "mypassword";
    password = "mypassword" ? console.log("Welldone") : console.log("Nah. try again!");

    return(
        <>
        <section className="head">
            <div className="box">Over 3 million ready to work creatives!</div>
            <p className="text">The world's destination for design.</p>
            <p className="body">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
            <button className="start">Get Started</button>
        </section>
        </>
    )
}