import { IAction, SET_POSTS } from '../actions'
import { IPost } from '../interfaces'

const initialState: IPost[] = []

export default (state: any = initialState, action: IAction) => {
    const { type, payload = {} } = action

    switch (type) {
        case SET_POSTS:
            if (payload.posts)
            return [
                ...state,
                ...payload.posts
            ]
        default:
            return state
    }
}
