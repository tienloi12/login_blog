import { ArticleModel } from "src/models/article.models"

export interface ArticleState {
    article: ArticleModel[],
    isSuccess : boolean,
    error: string,
    loading : boolean
}