import React from "react";
import Data from "./Data";

export default function Card(props) {
    return(
        <>
            <div className="card">
                <div className="slide">
                    {props.image.includes(".mp4") ? (<video className="video" src={props.image} autoPlay muted loop></video>) :
                    <img src={props.image} alt="" className="image" />}
                    <div className="tags">
                        <div className="name">{props.name}</div>
                        <div className="role">{props.job}</div>
                        <div className="role-tags">
                            {props.role.map((role, index) => (
                            <div className="tag" key={index}>{role}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}