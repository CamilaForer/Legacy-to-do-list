//Imports the main React component and the useState state hook.
import React, { useState } from "react";

//Definition of the Form component that receives a prop called addTodo
const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    // Function in charge of updating the value of the input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //The handleFormSubmit function is an event handler that is called when the user submits the form.
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() === "") return;
        addTodo({ title: inputValue, completed: false, deleted:false});
        setInputValue("");
    };
    
    //Render the component in the DOM
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row left-1">
                    <div className="column five wide imput-wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Añade una tarea 👀"
                        />
                    </div>
                    
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i></button>
                        
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;