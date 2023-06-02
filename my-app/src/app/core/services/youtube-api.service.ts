import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
const videoList = [
  {
    title: 'Introduction to Mathematics',
    videoId: 'JbhBdOfMEPs&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK&index=1'
  },
  {
    title: 'Working With Percentages',
    videoId: 'n9fgcm0Pwgs&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK&index=7'
  },
  {
    title: 'Negative Numbers',
    videoId: '3-5DKCLJspM&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK&index=13'
  }
];
@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private videoId: string | undefined;
  private videoList: any[] = [
    {
      title: 'Introduction to Mathematics',
      videoId: 'JbhBdOfMEPs&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK&index=1'
    },
    {
      title: 'Working With Percentages',
      videoId: 'n9fgcm0Pwgs&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK&index=7'
    },
    {
      title: 'Negative Numbers',
      videoId: '3-5DKCLJspM&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK&index=13'
    }
  ];

  setVideoId(videoId: string): void {
    this.videoId = videoId;
  }

  getVideoId(): string | undefined {
    return this.videoId;
  }

  getVideoIdByTitle(title: string): string | undefined {
    const video = this.videoList.find((video) => video.title === title);
    return video ? video.videoId : undefined;
  }
}


const IthvideoList = [
  {
    title: 'HTML & CSS Full Course - Beginner to Pro',
    videoId: 'G3e-cpL7ofc&list=PLEPye7A7EcQZrT3VSBb7jtxnxIfY3yyG6'
  },
  {
    title: 'How to put an HTML website online (on the Internet)',
    videoId: 'p1QU3kLFPdg&list=PLEPye7A7EcQZrT3VSBb7jtxnxIfY3yyG6&index=2'
  },
  {
    title: 'JavaScript Full Course (2023) - Beginner to Pro - Part 1',
    videoId: 'SBmSRK3feww&list=PLEPye7A7EcQZrT3VSBb7jtxnxIfY3yyG6&index=3'
  },
]
