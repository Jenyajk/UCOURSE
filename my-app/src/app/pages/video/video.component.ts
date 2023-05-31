import { Component, Input, OnInit } from '@angular/core';
import {YoutubeApiService} from "../../core/services/youtube-api.service";


@Component({
  selector: 'app-video',
  template: `
    <youtube-player
      videoId="mEZj_US42wE"
      suggestedQuality="highres"
      [height]="600"
      [width]="1080"
      [startSeconds]="43"
      [endSeconds]="60">
    </youtube-player>
  `,
  styles: []
})
export class VideoComponent implements OnInit {


  constructor() {}

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
