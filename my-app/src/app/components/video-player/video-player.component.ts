import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-video-player',
  template: ``,
  styles: []
})
export class VideoPlayerComponent implements OnInit{
  video: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.video = data;
  }


  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
