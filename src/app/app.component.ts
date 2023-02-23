import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleState } from './states/article.states';
import * as ArticleActions from './actions/article.actions'
import * as ItemAction from './actions/item.action'
import { Store } from '@ngrx/store';
import { onAuthStateChanged } from '@firebase/auth';
import { Auth, User, user } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
import { ItemState } from './states/item.state';
import { ActicleService } from './services/acticle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login_test';
  item$: Observable<ItemState>;
  article$: Observable<ArticleState>;
  user!: User | null;
  

  constructor(private authService: AuthService, 
    private acticleService : ActicleService,
    private auth: Auth,
    private store: Store<{ item: ItemState ,article: ArticleState }>,
    private itemService : ItemService,  
  ) {
    this.article$ = this.store.select('article');
    this.item$ = this.store.select('item');
  }

  loadarticle() {
    this.store.dispatch(ArticleActions.getPerginnate({ page: 1, itemPerPage: 5 }));
    this.store.dispatch(ItemAction.getPerginnate());
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
 


