import { Action } from 'redux'
import { IPost } from '../interfaces';

export interface IPayload {
    posts?: IPost[]
}

export interface IAction extends Action {
    type: string
    payload?: IPayload
}