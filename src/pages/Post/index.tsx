import React from 'react'

const Post = (props: any) => {
    console.log(props.match.params.post_id);
    return (
        <div className="container">
        </div>
    )
}

export default Post