import React, { useState } from "react";
import "./Section.scss";

const Section: React.FC<BodyProps> = ({heading, subheading, anchor, children}) => {
    return (
        <section className={"section__wrapper"} id={anchor}>
            <span aria-hidden="true">{subheading}</span>
            <h2>{heading}</h2>
            
            <div className={"section__wrapper--children"}>
                {children}
            </div>
        </section>
    )
}

export default Section;