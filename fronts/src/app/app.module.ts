import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JarwisService } from './services/jarwis.service';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import {MatSelectModule,MatInputModule, MatListModule, MatSnackBarModule,} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete'​;
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxPaginationModule} from 'ngx-pagination';
import {ScrollingModule} from '@angular/cdk/scrolling';
// import { OwlModule } from 'ngx-owl-carousel';
// import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
// import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { MembersComponent } from './pages/members/members.component';
import { HomeComponent } from './pages/home/home.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { AssociationComponent } from './pages/association/association.component';
import { MemberCatComponent } from './pages/member-cat/member-cat.component';
import { UserCatComponent } from './pages/user-cat/user-cat.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { EventProgramsComponent } from './pages/event-programs/event-programs.component';
import { HomeHeaderComponent } from './pages/home-header/home-header.component';

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
    AboutusComponent,
    OpportunitiesComponent,
    EventProgramsComponent,
    HomeHeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule,
    NgxPaginationModule,
    // SnotifyModule,
    // LazyLoadImageModule.forRoot({
    //   preset: scrollPreset 
    // }),
    ScrollingModule,
    MatAutocompleteModule​,
    MatFormFieldModule,
    // BrowserModule,
    // OwlModule
  
  ],
  // providers: [JarwisService,TokenService,AuthService,BeforeLoginService,AfterLoginService,
  //   { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
  // SnotifyService],
  providers: [JarwisService,TokenService,AuthService,BeforeLoginService,AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
