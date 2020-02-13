import React, { Component } from 'react'

interface IProps {
}

interface IState {
    name: string
    age: string
}

class AddName extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            name: 'Jame',
            age: '11',
        }
    }

    private move = (name: string) => {
        this.setState({
            name: name
        })
    }

    private handleChange = (e: any) => {
        this.setState({ name: e.target.value })
    }

    public render(): JSX.Element {
        return (
            <div className="container">
                <div>My name is {this.state.name} I'm {this.state.age}</div>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.name} />
                <button onClick={() => this.move('')}>Reset</button>
            </div>
        )
    }
}

export default AddName