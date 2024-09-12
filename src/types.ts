import { Dispatch } from "react"

export interface IProduct {
    id: number
    name: string
    price: number
    picture: string
}

export interface IBasket extends IProduct {
    count: number
}

export interface IState {
    products: IProduct[]
    basket: IBasket[]
}

export interface IAction {
    type: string
    payload?: unknown
}

export interface IContext {
    state: IState
    dispatch: Dispatch<IAction>
}