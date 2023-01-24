import React from "react"

//Definition of the Section component 
const Section = ({ children }) => {
    //Render the component in the DOM
    return (
        <div style={{ margin: "50px" }}>
            {children}
        </div>
    );
};

export default Section;