import { ActionReducerMap } from '@ngrx/store';
import {
  ideasReducer,
  IdeasState,
  IDEAS_FEATURE_KEY,
} from './ideas/ideas.reducer';

export interface AppState {
  [IDEAS_FEATURE_KEY]: IdeasState;
}

export const reducers: ActionReducerMap<AppState> = {
  [IDEAS_FEATURE_KEY]: ideasReducer,
};
