import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeammemberComponent } from './teammember/teammember.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideocallComponent } from './videocall/videocall.component';
import { CreatemeetingComponent } from './createmeeting/createmeeting.component';
import { AllmeetingComponent } from './allmeeting/allmeeting.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"registration",
        component:RegistrationComponent
    },
    {
        path:"loginsuccess",
        component:LoginsuccessComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"service",
        component:ServiceComponent
    },
    {
        path:"teammember",
        component:TeammemberComponent
    },
    {
        path:"contact",
        component:ContactusComponent
    },
    {
        path:'header',
        component:HeaderComponent
    },
    {
        path:'footer',
        component:FooterComponent
    } ,
    {
        path:'video',
        component:VideocallComponent
    },
    {
        path:'create',
        component:CreatemeetingComponent
    },
    {
        path:'allmeeting',
        component:AllmeetingComponent
    }
];
