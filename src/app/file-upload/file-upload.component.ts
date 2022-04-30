import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// @ViewChild('myFileInput1') myFileInput;


@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    maxFileSize = 2097152;
    allowedFileTypes = "image/jpeg;image/JPEG;image/png;image/PNG;image/jpg;image/JPG;image/gif;image/pdf; image/txt;image/doc;image/xls;image/xlsx";
    errorMessage = "";
    filePath_1 : string = "";
    filePath_2 : string = "";
    filePath_3 : string = "";
    filePath_4 : string = "";
    filePath_5 : string = "";
    filePath1 : any;
    filePath2 : string = "";
    filePath3 : string = "";
    filePath4 : string = "";
    filePath5 : string = "";
    oauth_key : string = "";

    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file1: File = null; // Variable to store file
    file2: File = null; // Variable to store file
    file3: File = null; // Variable to store file
    file4: File = null; // Variable to store file
    file5: File = null; // Variable to store file
    file1InnerHtml: any;
    file2InnerHtml: any;
    file3InnerHtml: any;
    file4InnerHtml: any;
    file5InnerHtml: any;

    // Inject service 
    constructor(private fileUploadService: FileUploadService, 
                private http: HttpClient, 
                private commonService : CommonService,
                private _sanitizer: DomSanitizer) { }

    ngOnInit(): void {
    }

    // On file Select
    onChange(event, file_no) {

        switch (file_no) {
            case 1:
                this.file1 = event.target.files[0];
                //console.log( this.file1);
                break;
            case 2:
                this.file2 = event.target.files[0];
                //console.log( this.file2);
                break;
            case 3:
                this.file3 = event.target.files[0];
                //console.log( this.file3);
                break;
            case 4:
                this.file4 = event.target.files[0];
               // console.log( this.file4);
                break;
            case 5:
                this.file5 = event.target.files[0];
                //console.log( this.file5);
                break;
            default:
                break;
        }

        // console.log( this.file1);
      
      
       
      
        //   console.log('size', this.file.size);
        //   console.log('type', this.file.type);
    }

    // OnClick of button Upload
    onUpload() {
        // console.log(this.file1)
        // console.log(this.file2)
        // console.log(this.file3)
        // console.log(this.file4)
        // console.log(this.file5)
        if( this.file1 !== null || this.file2 !== null || this.file3 !== null || this.file4 !== null || this.file5 !== null){
            this.loading = true;
          // console.log(this.loading);
            if (
                this.ValidateFile(this.file1) &&
                this.ValidateFile(this.file2) &&
                this.ValidateFile(this.file3) &&
                this.ValidateFile(this.file4) &&
                this.ValidateFile(this.file5)
            ) {
                
    
                // this.fileUploadService.upload(this.file1).subscribe(
                //     (event: any) => {
    
                const formData = new FormData();
                if(this.file1 !== undefined && this.file1 !== null)
                    formData.append("file_path_link_1", this.file1, this.file1.name);
    
                if(this.file2 !== undefined && this.file2 !== null)
                    formData.append("file_path_link_2", this.file2, this.file2.name);
    
                if(this.file3 !== undefined && this.file3 !== null)
                    formData.append("file_path_link_3", this.file3, this.file3.name);
    
                if(this.file4 !== undefined && this.file4 !== null)
                    formData.append("file_path_link_4", this.file4, this.file4.name);
    
                if(this.file5 !== undefined && this.file5 !== null)
                    formData.append("file_path_link_5", this.file5, this.file5.name);
    
                    formData.append("oauth_key", "F1CEC5YC4rrNhTzkP4aNR4Td3XAzCcHAWM4Eh1iDoofbl6xT");
    
               // console.log(formData);
                this.http.post(CommonService.api_url+'file_upload', formData ).subscribe(responseData => {
    
                    //console.log(responseData);
                    // this.loading = !this.loading;
                    // this.filePath1 = "1";
                    // this.filePath2 = "1";
                    // this.filePath3 = "1";
                    // this.filePath4 = "1";
                    // this.filePath5 = "1";
                    
                    // this.myFileInput1.nativeElement.value = '';
                    this.loading = false;
                    if(responseData["is_successful"]=="1"){
                      
                        let fileDetails = responseData["data"];
                       
                        this.filePath_1 = fileDetails.file_path_link_1;
                        this.filePath_2 = fileDetails.file_path_link_2;
                        this.filePath_3 = fileDetails.file_path_link_3;
                        this.filePath_4 = fileDetails.file_path_link_4;
                        this.filePath_5 = fileDetails.file_path_link_5;

                        // this.filePath1 = this._sanitizer.bypassSecurityTrustUrl(CommonService.image_url + this.filePath_1);
                        if(this.filePath_1 !== undefined ){
                            this.file1InnerHtml = this._sanitizer.bypassSecurityTrustHtml("<a href='"+CommonService.image_url + this.filePath_1+"' class='display-file-view' target='_blank'>View File</a>");
                        }
                        if(this.filePath_2 !== undefined){
                            this.file2InnerHtml = this._sanitizer.bypassSecurityTrustHtml("<a href='"+CommonService.image_url + this.filePath_2+"' class='display-file-view' target='_blank'>View File</a>");
                        }
                        if(this.filePath_3 !== undefined){
                        this.file3InnerHtml = this._sanitizer.bypassSecurityTrustHtml("<a href='"+CommonService.image_url + this.filePath_3+"' class='display-file-view' target='_blank'>View File</a>");
                        }
                        if(this.filePath_4 !== undefined){
                        this.file4InnerHtml = this._sanitizer.bypassSecurityTrustHtml("<a href='"+CommonService.image_url + this.filePath_4+"' class='display-file-view' target='_blank'>View File</a>");
                        }
                        if(this.filePath_5 !== undefined){
                        this.file5InnerHtml = this._sanitizer.bypassSecurityTrustHtml("<a href='"+CommonService.image_url + this.filePath_5+"' class='display-file-view' target='_blank'>View File</a>");
                        }
                        // else {
                        //     $('#view-here-diaplay').css("display","none");
                        // }
                        // $("#filePath1").attr("href",CommonService.image_url + this.filePath_1);
                        // console.log(this.filePath_1);

                        // this.filePath2 = CommonService.image_url + this.filePath_2;
                        // this.filePath3 = CommonService.image_url + this.filePath_3;
                        // this.filePath4 = CommonService.image_url + this.filePath_4;
                        // this.filePath5 = CommonService.image_url + this.filePath_5;
                      

                        $("#hdn_file_1").val(this.filePath_1);
                        $("#hdn_file_2").val(this.filePath_2);
                        $("#hdn_file_3").val(this.filePath_3);
                        $("#hdn_file_4").val(this.filePath_4);
                        $("#hdn_file_5").val(this.filePath_5);

                        $("#alert_danger").hide();
                        window.scroll(0, 0);
                        $("#alert_success").show();
                        $("#alert_success").html(responseData["success_message"]);
                        // setTimeout(() =>{
                        //     $("#alert_success").hide(); 
                        // }, 5000);
                        $('input[type="file"]').val('');
                        $('input[type="file"]').val(null);
                        $('input[type="file"]').length.val('');
                        $('#file-in-4').val(null);
                        $('#file-in-1').val(null);
                        $('#file-in-2').val(null);
                        $('#file-in-3').val(null);
                        $('#file-in-4').val(null);
                        // formData.append("file_path_link_1"  , null);
                        // formData.append("file_path_link_2"  , null);
                        // formData.append("file_path_link_3"  , null);
                        // formData.append("file_path_link_4"  , null);
                        // formData.append("file_path_link_5"  , null);
                        // this.filePath_1 = '';
                        // this.filePath_2 = '';
                        // this.filePath_3 = '';
                        // this.filePath_4 = '';
                        // this.filePath_5 = '';
                        
                    }
                    else{
                        // this.loading = false;
                        $("#alert_success").hide();
                        window.scroll(0,0);
                        $("#alert_danger").show();
                        $("#alert_danger").html(responseData["errors"]);
                        this.loading = false;
                        // setTimeout(() =>{
                        //     $("#alert_danger").hide();
                        // }, 5000);
                    }
    
                    // Setp 5: Set file names in hidden fields.
    
                });
                // if (typeof (event) === 'object') {
    
                //     // Short link via api response
                //     
    
                //      // Flag variable 
    
    
                // }
            }
    
    
            else {
                window.scroll(0,0);
                $("#alert_success").hide();
                $("#alert_danger").show();
                // $("#alert_danger").html("Please Enter Valid File Size and Type");
                $("#alert_danger").html(this.errorMessage);

                this.loading = false;
                // setTimeout(() =>{
                //     $("#alert_danger").hide(); 
                // }, 5000);
                // Display error in form. ErrorMessage: this.errorMessage
            }
        }
        else{
           
            window.scroll(0,0);
            $("#alert_success").hide();
            $("#alert_danger").show();
            $("#alert_danger").html("Please select atleast one file");
            
            // setTimeout(() =>{
            //     $("#alert_danger").hide(); 
            // }, 5000);
            this.loading = false;
            //console.log(this.loading);
           
        }
        
    }

    ValidateFile = function (fileToCheck) {
       // console.log(fileToCheck);
        let output = false;
        if (fileToCheck !== undefined && fileToCheck !== null) {
            this.errorMessage = "";

            if (fileToCheck.size > this.maxFileSize) {
                this.errorMessage = "Max. allowed file size is 2 MB for each file.";
                return false;
            }

            if (!(this.allowedFileTypes.split(";").includes(fileToCheck.type))) {
                this.errorMessage = "Uploaded file type is not in allowed file type list. Please try again.";
                // $("#alert_danger").show();
                // $("#alert_danger").html(this.errorMessage);
                return false;
            }

            if (this.errorMessage == "") {
                $("#alert_danger").hide();
                output = true;
            }
        }
        else {
            output = true;
        }

        return output;
    }

}
