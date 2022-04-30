import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.css']
})
export class ViewCaseComponent implements OnInit {
  siteKey : string;
  case_company_mapping_id : string;
  case_product: string;
  faulty_serial_number : string;
  fault_description : string;
  file_path_link_1 : string;
  file_path_link_2: string;
  file_path_link_3: string;
  file_path_link_4: string;
  file_path_link_5: string;
  remarks: string;
  fault_reporter: string;
  case_status: string;
  contact_additional_info: string;


  constructor(private http: HttpClient , private router: Router , private commonService : CommonService) {
    this.siteKey =  '6Lf_fowfAAAAAObI1R6H5sT5Ox_w7WNNP7bY5_MT';
   }


  ngOnInit(): void {
  }
  createCaseAdd(){
    this.router.navigateByUrl('/case-add');
  }
  searchCaseNo(){
    var case_no = $("#case_no").val();
    this.http.post(CommonService.api_url + 'case_view' ,{oauth_key : "F1CEC5YC4rrNhTzkP4aNR4Td3XAzCcHAWM4Eh1iDoofbl6xT",id : case_no}).subscribe(responseData=>{
      if(responseData["is_successful"] == "1"){
        let viewCaseDetails = responseData["data"];
        this.case_company_mapping_id = viewCaseDetails.case_company_mapping_id;
        this.case_product = viewCaseDetails.case_product;
        this.faulty_serial_number = viewCaseDetails.faulty_serial_number;
        this.fault_description = viewCaseDetails.fault_description;
        let file_path_link_1 = viewCaseDetails.file_path_link_1;
        let file_path_link_2 = viewCaseDetails.file_path_link_2;
        let file_path_link_3 = viewCaseDetails.file_path_link_3;
        let file_path_link_4 = viewCaseDetails.file_path_link_4;
        let file_path_link_5 = viewCaseDetails.file_path_link_5;
        this.remarks = viewCaseDetails.remarks;
        this.fault_reporter = viewCaseDetails.fault_reporter;
        this.case_status = viewCaseDetails.case_status;
        this.contact_additional_info = viewCaseDetails.contact_additional_info;

        this.file_path_link_1 = CommonService.image_url + file_path_link_1;
        this.file_path_link_2 = CommonService.image_url + file_path_link_2;
        this.file_path_link_3 = CommonService.image_url + file_path_link_3;
        this.file_path_link_4 = CommonService.image_url + file_path_link_4;
        this.file_path_link_5 = CommonService.image_url + file_path_link_5;

        $(".show-view-case-details").css("display","block");
      }
      else{
        $(".show-view-case-details").css("display","none");
      }
    });
  }

}
