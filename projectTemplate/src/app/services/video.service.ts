import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
@Injectable({
    providedIn: 'root'
})
export class VideoService {
    private videoURL = "http://localhost:8080/video"

    constructor(private http:HttpClient) { }

    getVideoList():Observable<any>{
        return this.http.get(this.videoURL);
    }

    addNewVideo(video:Video):Observable<any>{
        return this.http.post(this.videoURL,video);
    }

    deleteVideo(id:number):Observable<any>{
        return this.http.delete(this.videoURL+"/"+id);
    }

    getVideoById(id:number):Observable<any>{
        return this.http.get(this.videoURL+"/"+id);
    }

    getVideosByCategory(categoria:string):Observable<any>{
        return this.http.get(this.videoURL+"/category/"+categoria);
    }

    getVideosByTitle(titulo:string):Observable<any>{
        return this.http.get(this.videoURL+"/title/"+titulo);
    }

    videoAddLike(id:number):Observable<any>{
        return this.http.patch(this.videoURL+"/add-like/"+id,null);
    }

    videoRemoveLike(id:number):Observable<any>{
        return this.http.patch(this.videoURL+"/remove-like/"+id,null);
    }

    videoAddDislike(id:number):Observable<any>{
        return this.http.patch(this.videoURL+"/add-dislike/"+id,null);
    }

    videoRemoveDislike(id:number):Observable<any>{
        return this.http.patch(this.videoURL+"/remove-dislike/"+id,null);
    }

}
