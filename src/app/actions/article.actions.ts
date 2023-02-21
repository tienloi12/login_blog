import { createAction, props } from "@ngrx/store";
import { ArticleModel } from "src/models/article.models";






export const getPerginnate = createAction('[Article] Get Perginate', props <{page : number, itemPerPage: number}>());
export const getPerginnateSuccess = createAction('[Article] Get Perginnate Success', props <{article : ArticleModel[]}>());
export const getPerginateFailure = createAction ('[Article] Get Perginnate Failure', props<{error : string}>());