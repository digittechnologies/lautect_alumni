import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { MembersComponent } from './pages/members/members.component';
import { HomeComponent } from './pages/home/home.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { AssociationComponent } from './pages/association/association.component';
import { MemberCatComponent } from './pages/member-cat/member-cat.component';
import { UserCatComponent } from './pages/user-cat/user-cat.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    MembersComponent,
    HomeComponent,
    VerificationComponent,
    AssociationComponent,
    MemberCatComponent,
    UserCatComponent,
    AdminListComponent,
    SystemSettingComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SnotifyModule,
    NgxPaginationModule,
    FormsModule 
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
