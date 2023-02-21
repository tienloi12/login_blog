import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ActicleService } from "../services/acticle.service"
import * as ArticleActions from '../actions/article.actions'
import { ArticleModel } from "src/models/article.models";

@Injectable()
export class ArticleEffect {
    constructor(private actions: Actions, private articleService: ActicleService) { }
    getArticles$ = createEffect(
        () => this.actions.pipe(
            ofType(ArticleActions.getPerginnate),
            switchMap((action) => {
                return this.articleService.getArticles(action.page, action.itemPerPage);
            }),
            map((response) => {
                return ArticleActions.getPerginnateSuccess({ article: <Array<ArticleModel>>response })
            }),
            catchError((error) => {
                return of(ArticleActions.getPerginateFailure({ error: error.message }))
            }
            )
        )
    )
}


