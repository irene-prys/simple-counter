import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterSettingsComponent } from './counter/counter-settings/counter-settings.component';
import { CounterOperationControlsComponent } from './counter/counter-operation-controls/counter-operation-controlls.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent, 
    CounterOperationControlsComponent,
    CounterSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
