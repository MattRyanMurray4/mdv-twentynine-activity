import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Idea } from '@playground/api-interfaces';
import { IdeasService } from '@playground/core-data';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  loadIdea,
  loadIdeaFailure,
  loadIdeas,
  loadIdeasFailure,
  loadIdeasSuccess,
  loadIdeaSuccess,
} from './ideas.actions';

@Injectable()
export class IdeasEffects {
  loadIdeas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadIdeas),
      switchMap(() =>
        this.ideasService.all().pipe(
          tap((r) => console.log(r)),
          map((ideas: Idea) => loadIdeasSuccess({ ideas })),
          catchError((error) => of(loadIdeasFailure({ error })))
        )
      )
    )
  );

  loadIdea$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadIdea),
      switchMap(({ id }) =>
        this.ideasService.find(id).pipe(
          map((idea) => loadIdeaSuccess({ idea })),
          catchError((error) => of(loadIdeaFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private ideasService: IdeasService
  ) {}
}
