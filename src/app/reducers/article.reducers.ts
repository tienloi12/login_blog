import { createReducer, on } from "@ngrx/store"
import { ArticleState } from "../states/article.states"
import * as ArticleActions from '../actions/article.actions'


const initialState: ArticleState = {
    article:[],
    isSuccess: true,
    error: '',
    loading: false
}

export const articleReducer = createReducer (
    initialState,
    on(ArticleActions.getPerginnate, (state) => ({ ...state, loading: true })),
    on(ArticleActions.getPerginnateSuccess, (state, action) => ({ ...state, article: action.article,loading : false,error :''})),
    on(ArticleActions.getPerginateFailure,(state, action) => ({...state,loading: true,error : action.error,article :[] }))
)