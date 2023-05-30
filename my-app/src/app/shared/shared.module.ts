import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from "../ui/ui.module";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {MainComponent} from "../pages/main/main.component";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {VideoPlayerComponent} from "../components/video-player/video-player.component";
import {YouTubePlayerModule} from "@angular/youtube-player";
import {VideoComponent} from "../pages/video/video.component";



@NgModule({
  declarations: [
    NotFoundComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    VideoPlayerComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    MatMenuModule,
    MatButtonModule,
    YouTubePlayerModule,
  ],
  exports: [
    UiModule,
    NotFoundComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
    VideoPlayerComponent,
    VideoComponent,
  ]
})
export class SharedModule { }
