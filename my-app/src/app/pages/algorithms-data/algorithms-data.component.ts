import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VideoComponent} from "../../components/video/video.component";

@Component({
  selector: 'app-algorithms-data',
  templateUrl: './algorithms-data.component.html',
  styleUrls: ['./algorithms-data.component.scss']
})
export class AlgorithmsDataComponent implements OnInit{
  videos = [
    {
      title: 'Algorithms and Data Structures. Dars 1.',
      videoId: 'WtVugOjWtKY',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 2.',
      videoId: 'EBDPbjknu3U',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 3.',
      videoId: 'QKLZWs2lXEo',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures.Dars 4.',
      videoId: 'fZQ_AKCzjFw',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 5.',
      videoId: 'fEryPUeDHwI',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 6.',
      videoId: 'U36kbV_pxC8',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },    {
      title: 'Algorithms and Data Structures. Dars 7.',
      videoId: '_D6L6oo5OA8',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 8.',
      videoId: 'vFSchKx0804',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 9.',
      videoId: 'JC1f47o64XY',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Algorithms and Data Structures. Dars 10.',
      videoId: 'TQ_hYbQMtaw',
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
