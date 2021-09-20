import { Idea } from '@playground/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ideas Page] Init');

// SELECT

export const selectIdea = createAction(
  '[IDEA] Select an Idea',
  props<{ ideaId: string }>()
);

// ALL

export const loadIdeas = createAction('[IDEAS] Load All Ideas');

export const loadIdeasSuccess = createAction(
  '[IDEAS] Load Ideas Success',
  props<{ ideas: Idea }>()
);

export const loadIdeasFailure = createAction(
  '[IDEAS] Load Ideas Failure',
  props<{ error: any }>()
);

// SINGULAR

export const loadIdea = createAction(
  '[IDEA] Load An Idea',
  props<{ id: string }>()
);
export const loadIdeaSuccess = createAction(
  '[IDEA] Load An Idea Success',
  props<{ idea: Idea }>()
);
export const loadIdeaFailure = createAction(
  '[IDEA] Load An Idea Failure',
  props<{ error: any }>()
);
