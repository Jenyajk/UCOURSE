import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VideoComponent} from "../../components/video/video.component";

@Component({
  selector: 'app-smm',
  templateUrl: './smm.component.html',
  styleUrls: ['./smm.component.scss']
})
export class SmmComponent implements OnInit{
  videos = [
    {
      title: 'SMM. Dars 1.',
      videoId: 'Ak6k_PIm3dk',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'SMM. Dars 2.',
      videoId: '9ROAugyuJ5o',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },

  ];
  video!: any;
  constructor(private dialog: MatDialog) {}

  openModal( video: any) {
    this.dialog.open(VideoComponent, {
      data:  video
    });
  }
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
