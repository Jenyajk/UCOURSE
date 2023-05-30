import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {MainComponent} from "../pages/main/main.component";
import { YouTubePlayerModule } from '@angular/youtube-player';




@NgModule({
  declarations: [
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YouTubePlayerModule
  ],
  exports: [
    SharedModule,
    NotFoundComponent,
    MainComponent,
    YouTubePlayerModule
  ]
})
export class CoreModule { }
