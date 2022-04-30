import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { UserDetails } from '../create-case-add.model';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootstrap-template',
  templateUrl: './bootstrap-template.component.html',
  styleUrls: ['./bootstrap-template.component.css']
})
export class BootstrapTemplateComponent implements OnInit {
  // myRegistrationForm!:any;
  siteKey :string;
  submitted = false;
  constructor(private http: HttpClient , private router: Router) {
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


    $.getJSON("https://api.ipify.org?format=json", function(data) {
      // console.log(data.ip);
        $("#enter_user_ip_address").val(data.ip);
    });

  }
  // get f() { return this.myRegistrationForm.controls; }

  onSubmitUserDetails(){
    this.submitted = true;
    // console.log(this.myRegistrationForm)
    if(!this.validSignInForm()) {
      return;
    }
    else{
      this.http.post( 'https://dev.thcitsolutions.com/ipaq-api/case_add',{case_company_mapping_id : $('#company_code').val(),
        case_product :$('#product_name').val() ,
        faulty_serial_number : $('#product_no').val(),
        fault_description : $('#enter_fault').val(),
        file_path_link_1 : $('#filePath1').val(),
        file_path_link_2 :$('#filePath2').val() ,
        file_path_link_3 : $('#filePath3').val(),
        file_path_link_4: $('#filePath4').val(),
        file_path_link_5: $('#filePath5').val(),
        remarks: $('#enter_special_remarks').val(),
        fault_reporter: $('#enter_fault_reporter_name').val(),
        case_status:'open',
        contact_no : $('#enter_contact_no').val(),
        contact_email:$('#enter_contact_email').val() ,
        ip_address: $('#enter_user_ip_address').val()}).subscribe(responseData=>{

          if(responseData["is_successful"]=="1"){
            $("#alert_danger").hide();
            $("#alert_success").show();
            $("#alert_success").html("success_massage");

          }
          else{
            $("#alert_success").hide();
            $("#alert_danger").show();
            $("#alert_danger").html("error");
          }
      });
    }

    // Submit form
  }

  viewCaseAdd() {
    this.router.navigateByUrl('/view-case');
  }
  validSignInForm = function(){
    this.errorMessage = "";
    this.errorMessagePassword= "";
    
    var company_code = $("#company_code").val();  
    var product_name = $("#product_name").val();  
    var enter_fault = $("#enter_fault").val();  
    var enter_contact_email = $("#enter_contact_email").val();  
    var enter_contact_no = $("#enter_contact_no").val();  

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
    
    if(is_error)
      return false;
    else
      return true;

  }
  

}
