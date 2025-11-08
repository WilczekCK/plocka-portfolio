import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./Section.scss";


const Section: React.FC<BodyProps> = ({heading, subheading, anchor, children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [wasSeen, setWasSeen] = useState(false);

    function onChange (visible) {
        setIsVisible(visible);

        if (wasSeen === false && visible === true) {
            setWasSeen(true);
        }
    }

    return (
        <section className={"section__wrapper"} id={anchor}>
            <VisibilitySensor onChange={onChange}>        
                <span className={(isVisible || wasSeen ? 'fade-in' : 'fade-in-wait') + ' fade'} aria-hidden="true">{subheading}</span>
            </VisibilitySensor>

            <h2>{heading}</h2>
            
            <div className={"section__wrapper--children"}>
                {children}
            </div>
        </section>
    )
}

export default Section;