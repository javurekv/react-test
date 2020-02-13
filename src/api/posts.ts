import request from './request'
import { IPost } from '../interfaces'

export const getPosts = (): Promise<Array<IPost>> =>
    request.get('/posts/').then(posts => posts.data)