import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as IdeasActions from './ideas.actions';
import * as IdeasFeature from './ideas.reducer';
import * as IdeasSelectors from './ideas.selectors';

@Injectable()
export class IdeasFacade {
  loaded$ = this.store.pipe(select(IdeasSelectors.getIdeasLoaded));
  allIdeas$ = this.store.pipe(select(IdeasSelectors.getAllIdeas));
  selectedIdeas$ = this.store.pipe(select(IdeasSelectors.getSelected));

  constructor(private readonly store: Store) {}
  init() {
    this.store.dispatch(IdeasActions.init());
  }

  loadIdeas() {
    return this.store.dispatch(IdeasActions.loadIdeas());
  }

  loadIdea(id: string) {
    return this.store.dispatch(IdeasActions.loadIdea({ id }));
  }

  selectIdea(ideaId: string) {
    return this.store.dispatch(IdeasActions.selectIdea({ ideaId }));
  }

  private dispatch(action: Action) {
    return this.store.dispatch(action);
  }
}
