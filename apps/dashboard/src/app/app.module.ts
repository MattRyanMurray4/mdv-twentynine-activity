import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeasListComponent } from './ideas/ideas-list/ideas-list.component';
import { IdeaDetailsComponent } from './ideas/idea-details/idea-details.component';
import { CoreDataModule } from '@playground/core-data';
import { CoreStateModule } from '@playground/core-state';
import { UiLibraryModule } from '@playground/ui-library';
import { MaterialModule } from '@playground/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    IdeasListComponent,
    IdeaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
