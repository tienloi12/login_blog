import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as ItemActions from '../actions/item.action'
import { ItemModel } from "src/models/item.model";
import { ItemService } from "../services/item.service";

@Injectable()
export class ItemEffect {
    constructor(private actions: Actions, private itemService: ItemService) { }
    getArticles$ = createEffect(
        () => this.actions.pipe(
            ofType(ItemActions.getPerginnate),
            switchMap((action) => {
                return this.itemService.getAllItem();
            }),
            map((response) => {
                return ItemActions.getPerginnateSuccess({ item: <Array<ItemModel>>response })
            }),
            catchError((error) => {
                return of(ItemActions.getPerginateFailure({ error: error.message }))
            }
            )
        )
    )
}