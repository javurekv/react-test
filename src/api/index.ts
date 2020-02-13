import { AxiosResponse } from 'axios'

export interface IResponseModel {
  data: any
  meta?: { [key: string]: any }
}

export interface IResponseErrors {
  errors: any[]
}

export interface IAPIResponse extends AxiosResponse {
  data: IResponseModel | IResponseErrors
}
