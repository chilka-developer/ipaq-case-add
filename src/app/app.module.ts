import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCaseAddComponent } from './create-case-add/create-case-add.component';
import { ViewCaseComponent } from './view-case/view-case.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule} from '@angular/common/http';
import { BootstrapTemplateComponent } from './bootstrap-template/bootstrap-template.component';
import { FormsModule,  ReactiveFormsModule }   from '@angular/forms';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { CaptchaEndpointPipe } from './captcha-endpoint.pipe';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HashLocationStrategy , LocationStrategy } from '@angular/common';



const appRoutes :Routes = [

  { path : 'case-add' , component : CreateCaseAddComponent},
  // { path : 'bootstrap-template' , component : BootstrapTemplateComponent},
  { path : 'view-case' , component : ViewCaseComponent},
  { path : '' , redirectTo: '/case-add' , pathMatch: 'full' }
 
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCaseAddComponent,
    ViewCaseComponent,
    FileUploadComponent,
    BootstrapTemplateComponent,
    CaptchaEndpointPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BotDetectCaptchaModule,
    NgxCaptchaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide:LocationStrategy , useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
