import { Component } from '@angular/core';

@Component({
  selector: 'app-video-player',
  template: `
    <div style="text-align:center">
      <h1>
        Angular YouTube Video Player Demo
      </h1>
    </div>
    <h2>Select a Video</h2>
    <ul>
      <li *ngFor="let video of videoList">
        <h2><a href="#" (click)="selectVideo(video)">{{video.title}}</a></h2>
      </li>
    </ul>
    <app-video *ngIf="currentVideo" [title]="currentVideo.title" [videoId]="currentVideo.videoId"></app-video>
  `,
  styles: []
})
export class VideoPlayerComponent {
  videoList = [
    {
      title: '[Debugging] Expression has changed after it was checked',
      videoId: 'O47uUnJjbJc'
    },
    {
      title: '[Debugging] The pipe {name} could not be found',
      videoId: 'maI2u6Sxk9M'
    }
  ];

  currentVideo!: { title: string, videoId: string };

  selectVideo(video: { title: string, videoId: string }) {
    this.currentVideo = video;
  }
}
