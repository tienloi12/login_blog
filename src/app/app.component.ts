import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleState } from './states/article.states';
import * as ArticleActions from './actions/article.actions'
import { Store } from '@ngrx/store';
import { onAuthStateChanged } from '@firebase/auth';
import { Auth, User, user } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login_test';
  article$: Observable<ArticleState>;
  user!: User | null;

  constructor(private authService: AuthService, 
    private auth: Auth,
    private store: Store<{ article: ArticleState }>,
    private itemService : ItemService  
  ) {
    this.article$ = this.store.select('article');
  }

  loadarticle() {
    this.store.dispatch(ArticleActions.getPerginnate({ page: 1, itemPerPage: 5 }))
  }

  checkUser() {
    onAuthStateChanged(this.auth, (userInfo) => {
      if (userInfo) {
        this.user = userInfo;
      } else {
        this.user = null;
      }
    })
  }
  ngOnInit(): void {
    this.checkUser();
    this.itemService.getAllItem().subscribe((data) => {
    console.log(data);
  }
    )

  }
}
 


