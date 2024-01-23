import { Component, OnInit } from '@angular/core';
import { Video } from '../../../models/video';
import { VideoService } from '../../../services/video.service';
@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrl: './list-video.component.css'
})
export class ListVideoComponent implements OnInit{
    listVideos:Array<Video> = [];

    constructor(private videoService:VideoService){}

    ngOnInit(): void {
        this.cargarListado();
    }

    cargarListado(){
        this.videoService.getVideoList().subscribe(
            (res) => this.listVideos = res
        )
    }

    deleteVideo(id:number){
        this.videoService.deleteVideo(id).subscribe(
            (res) => console.log(res)
        )
    }
}
