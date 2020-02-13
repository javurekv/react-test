import React, { Component } from 'react'
import { getPosts } from '../../api/posts'
import { PostItem } from '../../components'
import { IPost } from '../../interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchPosts } from '../../actions/posts'

interface IState {
    posts: IPost[];
}

class Posts extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        }
    }

    public componentDidMount() {
        this.props.getPosts().then((posts: Array<IPost>) => {
            this.setState({
                posts
            })         
        })
    }

    public render() {
        return (
            <div className="container">
                {this.props.posts.length ? this.props.posts.map((post: IPost, index: number) => {
                    return (
                        <PostItem post={post} key={index} />
                    )
                }) :
                    <p>It's loading</p>
                }
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    console.log(state);
    return ({
        posts: state.posts,
    })
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPosts: () => dispatch(fetchPosts()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Posts)