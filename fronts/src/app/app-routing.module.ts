import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
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
import { HomeHeaderComponent } from './pages/home-header/home-header.component';
import { EventProgramsComponent } from './pages/event-programs/event-programs.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SystemCategoryComponent } from './pages/system-category/system-category.component';
import { PeopleCommiteeComponent } from './pages/people-commitee/people-commitee.component';

const appRoutes: Routes = [
  {
    path: 'people_commitee',
    component: PeopleCommiteeComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'system_cat',
    component: SystemCategoryComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'event_programs',
    component: EventProgramsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'home_header',
    component: HomeHeaderComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'nav',
    component: NavbarComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'verification',
    component: VerificationComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'association',
    component: AssociationComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'm_cat',
    component: MemberCatComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'user_cat',
    component: UserCatComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'admin_list',
    component: AdminListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'system_setting',
    component: SystemSettingComponent,
    canActivate: [AfterLoginService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
