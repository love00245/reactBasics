import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


function Todos() {
    const todos = useSelector(state => state.Todos);
    console.log("afs" ,todos);
    
    const dispatch = useDispatch();

    if(!todos){
        return(
            <>
            <div>heyya</div>
            </>
        );
    }
    return (
        <>
            <div>Todos</div>
            {todos.forEach(ele => {
                console.log(ele);
                
                <li key={ele.id}>
                    {todos.text}
                    <button onClick={() => dispatch(removeTodo(ele.id))}>X</button>
                </li>
            })}
        </>
    )
}

export default Todos;