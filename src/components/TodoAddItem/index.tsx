import React, { Component } from 'react'

interface IState {
    title: string
}

interface IPorps {
    addItem: any
}

class TodoAddItem extends Component<IPorps, IState> {
    constructor(props: IPorps) {
        super(props)
        this.state = {
            title: ''
        }
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({
            title: e.target.value
        })
    }

    private handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        this.props.addItem(this.state.title)
        this.setState({
            title: ''
        })
    }

    public render(): JSX.Element {
        return (
            <form>
                <input id="title" value={this.state.title} onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleSubmit }>Add</button>
            </form>
        )
    }
}

export default TodoAddItem