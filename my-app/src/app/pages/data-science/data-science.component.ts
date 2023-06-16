import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VideoComponent} from "../../components/video/video.component";

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss']
})
export class DataScienceComponent implements OnInit{
  videos = [
    {
      title: 'Data science. Dars 1.',
      videoId: 'yTVnaBopYSs',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Data science. Dars 2.',
      videoId: '735uBIZcIJ0',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Data science. Dars 3.',
      videoId: 'w9Nby21iieQ',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Data science. Dars 4.',
      videoId: '2HDcaM_WlVs',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Data science. Dars 5.',
      videoId: 'LyaF7CenH1A',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Data science. Dars 6.',
      videoId: '-i6dBPspis0',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },    {
      title: 'Data science. Dars 7.',
      videoId: 'kKS6TAJoXhg',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },
    {
      title: 'Data science. Dars 8.',
      videoId: 'db1EzkSfo3w',
      height: 200,
      width: 300,
      startSeconds: 43,
      endSeconds: 60
    },    {
      title: 'Data science. Dars 9.',
      videoId: 'QLy9N8WjnV8',
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
