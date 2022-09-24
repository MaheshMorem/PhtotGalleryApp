import { Component, NgZone, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CrdServiceService } from './crd-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl: any;
  tag: any;  
  base64code: any;
  postObj: any;
  allPosts: any;
  imageFound: any;
  getOneImage: any;
  imageNotFound: any;
  
  constructor(private crudServe: CrdServiceService, private router: Router){
    this.getImages()
  }
  uploaded(){
    this.postObj = {
      img: this.base64code,
      tag: this.tag      
    }
    this.crudServe.postImage(this.postObj).subscribe((data) => {
      alert("Posted")
    })
    window.location.reload()
  }
  getImages(){
    this.crudServe.getImages().subscribe((data: any) => {
      if(data.posts.length == 0){
        const nodata = {
          img: "../assets/404.jpg",
          tag:"No data"
        }
        this.imageNotFound = nodata;
      }else{
      this.allPosts = data.posts;
    }
    })
  }
  requestImage(){
    this.imageNotFound = "";
    this.imageFound = '';
    this.crudServe.getImage(this.getOneImage).subscribe((data: any) => {
      if(data == 1){
        const nodata = {
          img: "../assets/404.jpg",
          tag:"No data"
        }
        this.imageNotFound = nodata;
      }else{
        this.imageFound = data;
      }
    })
  }
  onChange = ($event: Event) =>{

    const target = $event.target as HTMLInputElement;

    // console.log($event.target.files[0].name

    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file)
  }
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.base64code = d
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
 
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
