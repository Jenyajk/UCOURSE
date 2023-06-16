import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";
import {YouTubePlayerModule} from "@angular/youtube-player";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatMenuModule,
    BrowserAnimationsModule,
    CommonModule,
    YouTubePlayerModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    CoreModule,
    MatMenuModule,
    YouTubePlayerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
