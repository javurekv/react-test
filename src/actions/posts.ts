import { Dispatch } from 'redux'
import { SET_POSTS } from './constants'
import { getPosts } from '../api/posts'
import { IPayload } from './interfaces'
import { IPost } from '../interfaces'

const setPosts = (payload: IPayload) => ({
    payload,
    type: SET_POSTS,
})

export const fetchPosts = (): any => async (dispatch: Dispatch) => {
    const posts: IPost[] = await (getPosts())
    try {
        dispatch(setPosts({ posts }))
    }
    catch {
        console.error('java zalupa')
    }
}