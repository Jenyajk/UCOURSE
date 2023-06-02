import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {
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
