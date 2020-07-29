import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {

  // private baseUrl= 'https://testenv.digittechnologies.org/lautech/platform/public/api';

    private baseUrl = 'http://localhost:8000/api';

    // private baseUrl = environment.baseUrl 

  constructor(private router: Router, private http: HttpClient) { }
 
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  me() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  addusercat(data) {
    return this.http.post(`${this.baseUrl}/addusercat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getusercat() {
    return this.http.get(`${this.baseUrl}/getusercat`)
  }
  addmembercat(data) {
    return this.http.post(`${this.baseUrl}/addmembercat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getmembercat() {
    return this.http.get(`${this.baseUrl}/getmembercat`)
  }
  membercatupdate(data) {

    return this.http.post(`${this.baseUrl}/membercatupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  membercatdelete(data) {

    return this.http.post(`${this.baseUrl}/memeberdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addasso(data) {
    return this.http.post(`${this.baseUrl}/addasso`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getasso() {
    return this.http.get(`${this.baseUrl}/getasso`)
  }
  assoupdate(data) {

    return this.http.post(`${this.baseUrl}/assoupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  assodelete(data) {

    return this.http.post(`${this.baseUrl}/assodelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  getauth() {
    return this.http.get(`${this.baseUrl}/getauth`)
  }
  getmember() {
    return this.http.get(`${this.baseUrl}/getmember`)
  }
  getadmin() {
    return this.http.get(`${this.baseUrl}/getadmin`)
  }

  updateappsetting(data) {
    return this.http.post(`${this.baseUrl}/updatesettingapp`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  addappsetting(data) {
    return this.http.post(`${this.baseUrl}/addsettingapp`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getappsetting() {
    return this.http.get(`${this.baseUrl}/getsettingapp`)
  }

  addaboutus(data) {
    return this.http.post(`${this.baseUrl}/addaboutus`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getaboutus() {
    return this.http.get(`${this.baseUrl}/getaboutus`)
  }
  getaboutcat() {
    return this.http.get(`${this.baseUrl}/getaboutcat`)
  }
  
  addhomeheader(data) {
    return this.http.post(`${this.baseUrl}/addhomeheader`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  updatehomeheader(data) {
    return this.http.post(`${this.baseUrl}/updatehomeheader`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  addheader(data) {
    return this.http.post(`${this.baseUrl}/addheader`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
  gethomeheader() {
    return this.http.get(`${this.baseUrl}/gethomeheader`)
  }
  addevent(data) {
    return this.http.post(`${this.baseUrl}/addevent`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getevent() {
    return this.http.get(`${this.baseUrl}/getevent`)
  }
  eventupdate(data) {

    return this.http.post(`${this.baseUrl}/eventupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  eventdelete(data) {

    return this.http.post(`${this.baseUrl}/eventdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addeventsch(data) {
    return this.http.post(`${this.baseUrl}/addeventsch`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  geteventsch() {
    return this.http.get(`${this.baseUrl}/geteventsch`)
  }
  eventschupdate(data) {

    return this.http.post(`${this.baseUrl}/eventschupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  eventschdelete(data) {

    return this.http.post(`${this.baseUrl}/eventschdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addcareercat(data) {
    return this.http.post(`${this.baseUrl}/addcareercat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getcareercat() {
    return this.http.get(`${this.baseUrl}/getcareercat`)
  }
  careercatupdate(data) {

    return this.http.post(`${this.baseUrl}/careercatupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  careercatdelete(data) {

    return this.http.post(`${this.baseUrl}/careercatdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addcareer(data) {
    return this.http.post(`${this.baseUrl}/addcareer`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getcareer() {
    return this.http.get(`${this.baseUrl}/getcareer`)
  }
  careerupdate(data) {

    return this.http.post(`${this.baseUrl}/careerupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  careerdelete(data) {

    return this.http.post(`${this.baseUrl}/careerdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addgallerycat(data) {
    return this.http.post(`${this.baseUrl}/addgallerycat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getgallerycat() {
    return this.http.get(`${this.baseUrl}/getgallerycat`)
  }
  gallerycatupdate(data) {

    return this.http.post(`${this.baseUrl}/gallerycatupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  gallerycatdelete(data) {

    return this.http.post(`${this.baseUrl}/gallerycatdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addgallery(data) {
    return this.http.post(`${this.baseUrl}/addgallery`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getgallery() {
    return this.http.get(`${this.baseUrl}/getgallery`)
  }
  galleryupdate(data) {

    return this.http.post(`${this.baseUrl}/galleryupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  gallerydelete(data) {

    return this.http.post(`${this.baseUrl}/gallerydelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addcat(data) {
    return this.http.post(`${this.baseUrl}/addcat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getcat() {
    return this.http.get(`${this.baseUrl}/getcat`)
  }
  catupdate(data) {

    return this.http.post(`${this.baseUrl}/catupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  catdelete(data) {

    return this.http.post(`${this.baseUrl}/catdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addpeople(data) {
    return this.http.post(`${this.baseUrl}/addpeople`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getpeople() {
    return this.http.get(`${this.baseUrl}/getpeople`)
  }
  peopleupdate(data) {

    return this.http.post(`${this.baseUrl}/peopleupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  peopledelete(data) {

    return this.http.post(`${this.baseUrl}/peopledelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addnewcat(data) {
    return this.http.post(`${this.baseUrl}/addnewcat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getnewcat() {
    return this.http.get(`${this.baseUrl}/getnewcat`)
  }
  newcatupdate(data) {

    return this.http.post(`${this.baseUrl}/newcatupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  newcatdelete(data) {

    return this.http.post(`${this.baseUrl}/newcatdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addnews(data) {
    return this.http.post(`${this.baseUrl}/addnews`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getnews() {
    return this.http.get(`${this.baseUrl}/getnews`)
  }
  newupdate(data) {

    return this.http.post(`${this.baseUrl}/newupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  newdelete(data) {

    return this.http.post(`${this.baseUrl}/newdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addinterview(data) {
    return this.http.post(`${this.baseUrl}/addinterview`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getinterview() {
    return this.http.get(`${this.baseUrl}/getinterview`)
  }

  interviewupdate(data) {

    return this.http.post(`${this.baseUrl}/interviewupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  interviewdelete(data) {

    return this.http.post(`${this.baseUrl}/interviewdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  userprofile(id:string) {

    return this.http.get(`${this.baseUrl}/userprofile/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  userupdate(data) {

    return this.http.post(`${this.baseUrl}/userupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  userdelete(data) {

    return this.http.post(`${this.baseUrl}/userdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  addauth(data) {
    return this.http.post(`${this.baseUrl}/addauth`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  authupdate(data) {

    return this.http.post(`${this.baseUrl}/authupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  authdelete(data) {

    return this.http.post(`${this.baseUrl}/authdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }

headerdelete(data) {

    return this.http.post(`${this.baseUrl}/headerdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  authsearch(data) {

    return this.http.post(`${this.baseUrl}/searchauth/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }

  usercatupdate(data) {

    return this.http.post(`${this.baseUrl}/usercatupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  usercatdelete(data) {

    return this.http.post(`${this.baseUrl}/usercatdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  aboutupdate(data) {

    return this.http.post(`${this.baseUrl}/aboutupdate/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  aboutdelete(data) {

    return this.http.post(`${this.baseUrl}/aboutdelete/`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
}
