import { createReducer, on } from "@ngrx/store"
import { ItemState } from "../states/item.state"
import * as ItemActions from '../actions/item.action'


const initialState: ItemState = {
    item:[],
    isSuccess: true,
    error: '',
    loading: false
}

export const itemReducer = createReducer (
    initialState,
    on(ItemActions.getPerginnate, (state) => ({ ...state, loading: true })),
    on(ItemActions.getPerginnateSuccess, (state, action) => ({ ...state, item: action.item,loading : false,error :''})),
    on(ItemActions.getPerginateFailure,(state, action) => ({...state,loading: true,error : action.error,item :[] }))
)