import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { YouTubePlayerModule } from '@angular/youtube-player';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    YouTubePlayerModule
  ],
  exports: [
    SharedModule,
    YouTubePlayerModule
  ]
})
export class CoreModule { }
