import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '.';
import { IdeasEffects } from './ideas/ideas.effects';
import { IdeasFacade } from './ideas/ideas.facade';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([IdeasEffects]),
    StoreDevtoolsModule.instrument({ name: 'ideas_store' }),
  ],
  providers: [IdeasFacade],
})
export class CoreStateModule {}
