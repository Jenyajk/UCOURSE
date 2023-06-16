import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VideoComponent} from "../../components/video/video.component";

@Component({
  selector: 'app-ted',
  templateUrl: './ted.component.html',
  styleUrls: ['./ted.component.scss']
})
export class TedComponent implements OnInit{
  videos = [
    {
      title: 'Orzuni haqiqatga aylantirish',
      videoId: 'q7f2wk4m4j8',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Kompyuterni kim boshqaradi',
      videoId: 'uZQKMhSyI4c',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Ayollar kosmosda',
      videoId: '-u3Uk_2Zu7s',
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
