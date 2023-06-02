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
import {MatCardModule} from "@angular/material/card";
import {MathComponent} from "../pages/math/math.component";
import {ItComponent} from "../pages/it/it.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NotFoundComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    VideoPlayerComponent,
    VideoComponent,
    MathComponent,
    ItComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    MatMenuModule,
    MatButtonModule,
    YouTubePlayerModule,
    MatCardModule,
    RouterModule,
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
    MathComponent,
    ItComponent
  ]
})
export class SharedModule { }
