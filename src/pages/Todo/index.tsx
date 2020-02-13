import React, { Component } from 'react'
import { TodoItem, TodoAddItem } from '../../components'
import { ITodo } from '../../interfaces'
import uuidv4 from 'uuid/v4';

interface IState {
    todo: any[]
}

interface IProps {
    todo: any[]
}

class Todo extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            todo: []
        }
    }

    private addItem = (title: string) => {
        const item = {
            title,
            id: uuidv4()
        }
        
        this.setState({
            todo: [...this.state.todo, item]
        })
    }

    private deleteItem = (id: string) => {
        const todos = this.state.todo.filter((item: ITodo) => {
            return item.id !== id
        })
        this.setState({
            todo: todos
        })
    }

    public render() {
        return (
            <div className="container">
                {this.state.todo.map((todoItem: ITodo, index) => {
                    return (
                        <TodoItem item={todoItem} deleteItem={this.deleteItem} key={index}/>
                    )
                })}
                <TodoAddItem addItem={this.addItem} />
            </div>
        )
    }
}

export default Todo