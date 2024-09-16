import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        console.log(input);
        
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')

    }
    return (
        <>
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input type="text"
                    className="bg-gray-800 rounder border border-gray-500 focus:border-indigo-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="enter a todo...."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}

                />
                <button type="submit">
                        
                </button>
            </form>
        </>
    )
};

export default AddTodo;