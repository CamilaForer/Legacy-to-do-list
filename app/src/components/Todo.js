//Imports the main React component and the useState state hook.
import React, { useState } from "react";

const Todo = ({ title, completed, deleted, removeTodoItemProp, editTodoItemProp, permanentDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);
    const [erasedState, setErased] = useState(deleted);
    
    //The handleDivDoubleClick function is an event function that is executed when the user double-clicks a specific item in the task list.
    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    //The archiveDelete function is a function that takes care of archiving or deleting a specific item from the task list.
    const archiveDelete = () => {
        setErased((oldDeleted) => {
            const newState = !oldDeleted;
            editTodoItemProp({ deleted: newState });
            return newState;
        });
    };

    //The handleInputKeyDown function is an event-handling function that is executed each time a key is pressed in the input field of the task.
    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    //The handleButtonClick function is an event handler function that is executed each time the task complete button is clicked
    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };

    //Render the component in the DOM
    return (
        <div className={"row" + (completedState ? " row2" : "") + (permanentDelete ? " row3" : "")}>
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus={true}
                                value={tempValue}
                            />
                        </div>
                    </div> :
                    <>
                        <div className="column five wide flex-task" onDoubleClick={handleDivDoubleClick}>
                            {/* Done Button */}
                            <button
                                className={"ui button circular icon" + (completedState ? " blue" : " green")}
                                onClick={handleButtonClick}
                            >
                                <i className="white check icon"></i>
                            </button>
                            {/* Text */}
                            <h2 className={"ui header" + (completedState ? " green" : "")}>{value}</h2>
                            {/* Delete Button */}
                            <button
                                onClick={permanentDelete ? removeTodoItemProp : archiveDelete}
                                className={"ui icon button trashBtn"}
                            >
                                <i className="trash icon red"></i>
                            </button>
                        </div>

                    </>
            }
        </div>
    );
};

export default Todo;