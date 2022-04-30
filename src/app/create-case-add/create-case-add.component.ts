import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-create-case-add',
  templateUrl: './create-case-add.component.html',
  styleUrls: ['./create-case-add.component.css']
})
export class CreateCaseAddComponent implements OnInit {

  siteKey :string;
  submitted = false;
  company_name : string;
  company_code : string;
  company_id : number;
  case_no : number;
  constructor(private http: HttpClient , private router: Router , private commonService : CommonService) {
    this.siteKey =  '6Lf_fowfAAAAAObI1R6H5sT5Ox_w7WNNP7bY5_MT';
   }

  ngOnInit(): void {
    $("#errorCompanyCode").hide();
    $("#errorProductName").hide();
    $("#errorEnterFault").hide();
    $("#errorEnterContactEmail").hide();
    $("#errorEnterContactNo").hide();
    $("#alert_success").hide();
    $("#alert_danger").hide();
    // this.myRegistrationForm = new FormGroup({
    //   myCompanyCode: new FormControl('',Validators.required),
    //   myProductName: new FormControl('',Validators.required),
    //   myEnterFault: new FormControl('',Validators.required),
    //   myEnterContactEmail: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   myEnterContactNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    //   // password: new FormControl('')
    //   });

  
     // get from query string ;
   
   
  //  console.log(company_code);
    $.getJSON("https://api.ipify.org?format=json", function(data) {
      
        $("#enter_user_ip_address").val(data.ip);
    });
    
    let company_code = this.getUrlVars();
    //console.log(company_code)
    if(company_code !== undefined && company_code != '' && company_code !== null ){
     
      
      $("#alert_danger").hide();
      // alert("1")
      // console.log(company_code)
      this.http.post(CommonService.api_url + 'get_company_name' , {oauth_key : "F1CEC5YC4rrNhTzkP4aNR4Td3XAzCcHAWM4Eh1iDoofbl6xT" , company_code : company_code }).subscribe(responseData=>{
        if(responseData["is_successful"]=="1"){
          let companyData = responseData["data"];
          this.company_name = companyData["company_name"];
          this.company_id = companyData["company_id"];
        } else {
          window.scroll(0, 0);
          $("#alert_success").hide();
          $("#alert_danger").show();
          $("#alert_danger").html("Invalid URL is provided. Please use URL provided by Maxxmedia team");
          
        }
      });
    }
    else{
      // alert("2")
      $("#alert_success").hide();
      $("#alert_danger").show();
      $("#alert_danger").html("Invalid URL is provided. Please use URL provided by Maxxmedia team");
    }
  }
  // get f() { return this.myRegistrationForm.controls; }
  getUrlVars()
  {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
        
          vars.push(hash[1]);
          vars[hash[1]] = hash[2];
      }
     
      return hash[1];
     
  }
  onSubmitUserDetails(){
    this.submitted = true;
    // console.log(this.myRegistrationForm)
    if(!this.validSignInForm()) {
      return;
    }
    else{
      // console.log(this.company_id);
      let company_code = this.getUrlVars();
      this.http.post( CommonService.api_url + 'case_add',{
        oauth_key:"F1CEC5YC4rrNhTzkP4aNR4Td3XAzCcHAWM4Eh1iDoofbl6xT" , 
        case_product :$('#product_name').val() ,
        faulty_serial_number : $('#product_no').val(),
        fault_description : $('#enter_fault').val(),
        file_path_link_1 : $('#hdn_file_1').val(),
        file_path_link_2 :$('#hdn_file_2').val() ,
        file_path_link_3 : $('#hdn_file_3').val(),
        file_path_link_4: $('#hdn_file_4').val(),
        file_path_link_5: $('#hdn_file_5').val(),
        remarks: $('#enter_special_remarks').val(),
        fault_reporter: $('#enter_fault_reporter_name').val(),
        case_status:'open',
        contact_no : $('#enter_contact_no').val(),
        contact_email:$('#enter_contact_email').val() ,
        ip_address: $('#enter_user_ip_address').val(),
        company_id : this.company_id ,
        company_code :company_code 
      }).subscribe(responseData=>{

          if(responseData["is_successful"]=="1"){
            let caseAddDetails = responseData["data"];
            this.case_no = caseAddDetails.CaseNo;
            window.scroll(0,0);
            $("#alert_success").show();
            $("#alert_success").html(responseData["success_message"]);  

             $("#errorCompanyCode ,#errorProductName,#errorEnterFault,#errorEnterContactEmail,#errorEnterContactNo,#alert_danger ").hide();
            // $("#errorCompanyCode").hide();
            // $("#errorProductName").hide();
            // $("#errorEnterFault").hide();
            // $("#errorEnterContactEmail").hide();
            // $("#errorEnterContactNo").hide();
            // $("#alert_danger").hide();
            $('input[type=text] ,input[type=number],input[type=email], textarea').val('');   
            // $('input[type=text]').val('');   
            // $('input[type=number]').val('');  
            // $('input[type=email]').val('');  
            // $('textarea').val('');  
            $('a.display-file-view').css("display" , "none");
            

          }
          else{
            $("#alert_success").hide();
            window.scroll(0,0);
            $("#alert_danger").show();
            $("#alert_danger").html(responseData["errors"]);
            
          }
      });
    }

    // Submit form
  }

  viewCaseAdd() {
    // this.router.navigateByUrl('/view-case');
  }
  validSignInForm = function(){
    this.errorMessage = "";
    this.errorMessagePassword= "";
    
    var company_code = $("#company_code").val();  
    var product_name = $("#product_name").val();  
    var enter_fault = $("#enter_fault").val();  
    var enter_contact_email = $("#enter_contact_email").val();  
    var enter_contact_no = $("#enter_contact_no").val();  
    var enter_contact_length_no = $("#enter_contact_no").val();  

    $("#company_code").removeClass("form-error");  
    $("#product_name").removeClass("form-error");  
    $("#enter_fault").removeClass("form-error");  
    $("#enter_contact_email").removeClass("form-error");  
    $("#enter_contact_no").removeClass("form-error");  

    // console.log(company_code);
    // console.log(product_name);
    // console.log(enter_fault);
    // console.log(enter_contact_email);
    // console.log(enter_contact_no);

    var is_error = false;
    
    if(company_code == ""){ 
      $("#errorCompanyCode").show();
      $("#company_code").addClass("form-error");
      is_error = true;
    }
    if(product_name == ""){
      $("#errorProductName").show();
      $("#product_name").addClass("form-error");
      is_error = true;
    }
    if(enter_fault == ""){
      $("#errorEnterFault").show();
      $("#enter_fault").addClass("form-error");
      is_error = true;
    }
    if(enter_contact_email == ""){
      $("#errorEnterContactEmail").show();
      $("#enter_contact_email").addClass("form-error");
      is_error = true;
    }
    if(enter_contact_no == ""){
      $("#errorEnterContactNo").show();
      $("#enter_contact_no").addClass("form-error");
      is_error = true;
    }
    // if(enter_contact_length_no.length() <15){

    // }
    
    if(is_error)
      return false;
    else
      return true;

  }
  


}
