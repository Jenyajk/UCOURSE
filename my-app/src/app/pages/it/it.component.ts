import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VideoComponent} from "../../components/video/video.component";

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ItComponent  implements OnInit{
  videos = [
    {
      title: 'React Tutorial for Beginners',
      videoId: 'SqcY0GlETPk',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'React JS Explained In 10 Minutes',
      videoId: 's2skans2dP4',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Node.js Crash Course',
      videoId: 'fBNz5xF-Kx4',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Node.js Crash Course Tutorial #1 - Introduction & Setup',
      videoId: 'zb3Qk8SG5Ms',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Next.js Pages, Layout, Links, Routes & Loading | Next.js 13 tutorial',
      videoId: 'vuznUqirz5I',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Learn Flexbox CSS in 8 minutes',
      videoId: 'phWxA89Dy94',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },    {
      title: 'You Can Learn HTML in Under 1 Hour + Project (Beginner Friendly)',
      videoId: 'j5Oh3EawGkM',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Save HTML Form Data to a MySQL Database using PHP',
      videoId: 'Y9yE98etanU',
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
