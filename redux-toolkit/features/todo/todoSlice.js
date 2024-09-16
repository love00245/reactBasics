import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
};



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            
            const todo = {
                id: nanoid(3),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // state.todos.splice(action.payload.id, 1);
            state.todos = state.todos.filter(e => e.id != action.payload);
        },
        updateTodo: (state, action) => {
            state.todos.forEach(e => {
                if (e.id == action.payload.id) {
                    e.text = action.payload.text;
                }
            });
        }
    }
});


export const { addTodo, removeTodo } = todoSlice.actions;


export default todoSlice.reducer;