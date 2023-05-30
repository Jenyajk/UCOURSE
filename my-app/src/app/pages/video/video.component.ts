import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
    <h2>{{ title }}</h2>
    <div id="player"></div>
  `,
  styles: []
})
export class VideoComponent implements OnInit {
  @Input() title!: string;
  @Input() videoId!: string;

  ngOnInit() {
    this.loadYouTubePlayer();
  }

  loadYouTubePlayer() {
    // Загрузка и инициализация YouTube Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Создание проигрывателя при загрузке API
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player('player', {
        videoId: this.videoId,
        width: 640,
        height: 360,
      });
    };
  }
}
