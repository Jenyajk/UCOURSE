import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VideoComponent} from "../../components/video/video.component";



@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})



export class MathComponent  implements OnInit{
  videos = [
    {
      title: 'Algebra Shortcut Trick - how to solve equations instantly',
      videoId: '3H7385duSpA',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algebra Trick to save you time (Algebra Tricks)',
      videoId: 'Ks-wwYpS20Y',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'How to Get Better at Math',
      videoId: 'HPsazrVSjl8',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algebra Introduction - Basic Overview - Online Crash Course Review Video Tutorial Lessons',
      videoId: 'grnP3mduZkM',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Introduction to Geometry',
      videoId: '302eJ3TzJQU',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Fractions Review | Adding, Subtracting, Multiplying, and Dividing Fractions | Math with Mr. J',
      videoId: '-Um7bov8ixc',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Fractions Made EASY!',
      videoId: '5hG8e9jGeaA',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Factoring 100 Polynomials (one take)',
      videoId: 'sA0B8jVi0bE',
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
