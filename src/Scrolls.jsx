import React from "react";

export default function Scrolls() {
    return(
        <>
        <section className="scrolling">
            <div className="scroll">
                <img src="./RedHead.jpg" alt="" className="scroll__img"/>
                <div className="scroll__texts">
                    <div className="scroll__name">Obe Grace</div>
                    <div className="scroll__job">Software Engineer</div>
                    <div className="scroll__buttons">
                        <button className="scroll__btn1">Java</button>
                        <button className="scroll__btn2">Python</button>
                        <button className="scroll__btn3">Web Dev</button>
                    </div>
                </div>
            </div>
            <div className="scroll">
                <img src=".\FishFace.jpeg" alt="" className="scroll__img"/>
                <div className="scroll__texts">
                    <div className="scroll__name">Selena Gomez</div>
                    <div className="scroll__job">Swimmer</div>
                    <div className="scroll__buttons">
                        <button className="scroll__btn1">Pool</button>
                        <button className="scroll__btn2">Cap</button>
                        <button className="scroll__btn3">Swim Suit</button>
                    </div>
                </div>
            </div>
            <div className="scroll">
                <img src="./Whitey.avif" alt="" className="scroll__img"/>
                <div className="scroll__texts">
                    <div className="scroll__name">Taylor Swift</div>
                    <div className="scroll__job">Bride</div>
                    <div className="scroll__buttons">
                        <button className="scroll__btn1">Dress</button>
                        <button className="scroll__btn2">Flowers</button>
                        <button className="scroll__btn3">Smile</button>
                    </div>
                </div>
            </div>
            <div className="scroll">
                <img src="./Red wolf.png" alt="" className="scroll__img"/>
                <div className="scroll__texts">
                    <div className="scroll__name">My Pet</div>
                    <div className="scroll__job">Wolf</div>
                    <div className="scroll__buttons">
                        <button className="scroll__btn1">Fire</button>
                        <button className="scroll__btn2">Beauty</button>
                        <button className="scroll__btn3">Danger</button>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}