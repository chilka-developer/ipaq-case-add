import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // baseApiUrl = "https://dev.thcitsolutions.com/ipaq-api/"

  // constructor(private http:HttpClient) { }
  // upload(file):Observable<any> {
  //   const formData = new FormData(); 
  //   formData.append("file_path_link_1", file, file.name);
  //   /*formData.append("file_path_link_2", file, file.name);
  //   formData.append("file_path_link_3", file, file.name);
  //   formData.append("file_path_link_4", file, file.name);
  //   formData.append("file_path_link_5", file, file.name);*/
  //   return this.http.post(this.baseApiUrl + "file_upload", formData)
  // } 
}
