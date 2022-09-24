import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrdServiceService {
  API_URL = "http://localhost:3030"
  constructor(private http: HttpClient) { }

  postImage(data: any){
    return this.http.post(this.API_URL+"/post", data)
  }

  getImages(){
    return this.http.get(this.API_URL)
  }

  getImage(img: any){
    return this.http.get(this.API_URL+"/getImage/:"+img)
  }
}
