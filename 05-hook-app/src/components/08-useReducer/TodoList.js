import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (t, index) => (
                        <TodoListItem
                        key={ t.id }
                            index={ index }
                            todo={ t }
                            handleToggle={ handleToggle }
                            handleDelete = { handleDelete }
                        />
                    )
                )
            }
        </ul>
    )
}
