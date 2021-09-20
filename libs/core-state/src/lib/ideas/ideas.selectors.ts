import { createFeatureSelector, createSelector } from '@ngrx/store';
import { emptyIdea, Idea } from '@playground/api-interfaces';
import { IDEAS_FEATURE_KEY, IdeasState, ideasAdapter } from './ideas.reducer';

// Lookup the 'Ideas' feature state managed by NgRx
export const getIdeasState =
  createFeatureSelector<IdeasState>(IDEAS_FEATURE_KEY);

const { selectAll, selectEntities } = ideasAdapter.getSelectors();

export const getIdeasLoaded = createSelector(
  getIdeasState,
  (state: IdeasState) => state.loaded
);

export const getIdeasError = createSelector(
  getIdeasState,
  (state: IdeasState) => state.error
);

export const getAllIdeas = createSelector(getIdeasState, (state: IdeasState) =>
  selectAll(state)
);

export const getIdeasEntities = createSelector(
  getIdeasState,
  (state: IdeasState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getIdeasState,
  (state: IdeasState) => state.selectedId
);

export const getSelected = createSelector(
  getIdeasEntities,
  getSelectedId,
  (entities, selectedId) =>
    (selectedId ? entities[selectedId] : emptyIdea) as Idea
);
