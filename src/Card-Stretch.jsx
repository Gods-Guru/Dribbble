import React, {useEffect, useRef}  from "react";
import Card from "./Cards"; 
import Data from "./Data";

export default function CardStretch() {
    const containerRef = useRef(null);

    useEffect(() => {
        //The current container that div has scrolled to
        const container = containerRef.current
        const scrollSpeed = 5
        let animationFrameId

        const scroll = () => {
            container.scrollLeft += scrollSpeed
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0
            }
            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        // return () => cancelAnimationFrame(animationFrameId)
    }, [])
    return(
        <div className="Card-Container" ref={containerRef}>
            {[...Data, ...Data, ...Data, ...Data, ...Data].map((item, index) => (
                <Card
                key = {index}
                id = {item.id}
                job = {item.job}
                name = {item.name}
                image = {item.image}
                role = {item.role}
                />
            ))
            }
            {/*Use the .map method to map through the objects in Data */}
        </div>
    )
}