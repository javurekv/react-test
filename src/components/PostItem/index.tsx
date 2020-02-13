import React, { Component } from 'react'
import { IPost } from '../../interfaces'
import { Link } from 'react-router-dom'

interface IProps {
    post: IPost
}

const PostItem = ({ post }: IProps): JSX.Element => {
    return (
        <Link to={"posts/"+post.id} className="card">
            <div className="card-content">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>
        </Link>
    )
}

export default PostItem;
