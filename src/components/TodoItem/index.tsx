import React from 'react'
import { ITodo } from '../../interfaces'

interface IProps {
    item: ITodo
    deleteItem?: any
}

const TodoItem = ({ item, deleteItem }: IProps) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <button onClick={() => deleteItem(item.id)}>delete the item</button>
        </div>
    )
}

export default TodoItem
