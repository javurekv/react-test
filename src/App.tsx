import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Navbar } from './components';
import { AddName, Todo, Posts, Post } from './pages';
import { Provider } from 'react-redux';
import store from './stores';

class App extends Component {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <Route path="/" exact component={ AddName } />
                        <Route path="/todo" component={ Todo } />
                        <Route path="/posts" exact component={Posts} />
                        <Route path="/posts/:post_id" component={ Post }/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App