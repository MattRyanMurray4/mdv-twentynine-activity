import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Idea } from '@playground/api-interfaces';

import * as IdeasActions from './ideas.actions';

export const IDEAS_FEATURE_KEY = 'ideas';

export interface IdeaAction extends Action {
  error: string;
}

export interface IdeasState extends EntityState<Idea> {
  selectedId?: string | number; // which Ideas record has been selected
  loaded: boolean; // has the Ideas list been loaded
  error?: string | null; // last known error (if any)
}

export interface IdeasPartialState {
  readonly [IDEAS_FEATURE_KEY]: IdeasState;
}

export const ideasAdapter: EntityAdapter<Idea> = createEntityAdapter<Idea>({
  selectId: (i) => {
    // console.log(i);
    return i?.key;
  },
});

export const initialState: IdeasState = ideasAdapter.getInitialState({
  loaded: false,
});

const setLoading = (state: IdeasState) => ({
  ...state,
  loaded: false,
  error: null,
});

const setFailure = (state: IdeasState, { error }: IdeaAction) => ({
  ...state,
  error,
});

const _ideasReducer = createReducer(
  initialState,
  on(IdeasActions.loadIdea, IdeasActions.loadIdeas, setLoading),
  on(IdeasActions.loadIdeaFailure, IdeasActions.loadIdeasFailure, setFailure),
  on(IdeasActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(IdeasActions.loadIdeasSuccess, (state, { ideas }) =>
    ideasAdapter.setOne(ideas, { ...state, loaded: true })
  ),
  on(IdeasActions.loadIdeaSuccess, (state, { idea }) =>
    ideasAdapter.upsertOne(idea, { ...state, loaded: true })
  ),
  on(IdeasActions.selectIdea, (state, { ideaId }) => ({
    ...state,
    selectedId: ideaId,
  }))
);

export function ideasReducer(state: IdeasState | undefined, action: Action) {
  return _ideasReducer(state, action);
}
