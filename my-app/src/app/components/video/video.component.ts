import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.scss']
})
export class VideoComponent implements OnInit {
  video: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<VideoComponent>) {
    this.video = data;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
