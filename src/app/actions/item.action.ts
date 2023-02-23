import { createAction, props } from "@ngrx/store";
import { ItemModel } from "src/models/item.model";






export const getPerginnate = createAction('[Item] Get Perginate');
export const getPerginnateSuccess = createAction('[Item] Get Perginnate Success', props <{item : ItemModel[]}>());
export const getPerginateFailure = createAction ('[Item] Get Perginnate Failure', props<{error : string}>());