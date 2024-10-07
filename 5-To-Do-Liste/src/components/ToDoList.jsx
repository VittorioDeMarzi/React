import ToDo from "./ToDo"

export default function ToDoList(props) { 

    return (
        <>
            {props.toDos.map(ele => <ToDo toDo={ele} />)}
        </>
    )
}