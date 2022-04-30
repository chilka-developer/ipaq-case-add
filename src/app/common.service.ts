import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // public static api_url ="https://dev.thcitsolutions.com/ipaq-api/";
  public static api_url ="http://103.142.174.104:8080/ipaq-api/";



  // public static image_url ="https://dev.thcitsolutions.com/ipaq-api/uploads/";
  //public static image_url ="http://103.142.174.104:8080/ipaq-api/uploads/";
  public static image_url ="http://103.142.174.104/ipaq-demo/uploads/";
  
 


}
