import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';

const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

const routes: Routes = [
  {
    path: 'templates',
    loadChildren: 'app/template/printing.module#PrintingModule'
  },
  { path: '',
    redirectTo: '/templates',
    pathMatch: 'full'
  }
]

console.log();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot([], { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
