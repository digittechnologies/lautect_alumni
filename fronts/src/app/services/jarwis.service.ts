import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {

  private baseUrl= 'https://testenv.digittechnologies.org/lautech/platform/public/api';

    // private baseUrl = 'http://localhost/lautech/platform/public/api';

    // private baseUrl = environment.baseUrl 

  constructor(private http: HttpClient) { }
 
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
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
  addasso(data) {
    return this.http.post(`${this.baseUrl}/addasso`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getasso() {
    return this.http.get(`${this.baseUrl}/getasso`)
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
  addeventsch(data) {
    return this.http.post(`${this.baseUrl}/addeventsch`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  geteventsch() {
    return this.http.get(`${this.baseUrl}/geteventsch`)
  }
  addcareercat(data) {
    return this.http.post(`${this.baseUrl}/addcareercat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getcareercat() {
    return this.http.get(`${this.baseUrl}/getcareercat`)
  }
  addcareer(data) {
    return this.http.post(`${this.baseUrl}/addcareer`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getcareer() {
    return this.http.get(`${this.baseUrl}/getcareer`)
  }
  addgallerycat(data) {
    return this.http.post(`${this.baseUrl}/addgallerycat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getgallerycat() {
    return this.http.get(`${this.baseUrl}/getgallerycat`)
  }
  addgallery(data) {
    return this.http.post(`${this.baseUrl}/addgallery`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getgallery() {
    return this.http.get(`${this.baseUrl}/getgallery`)
  }

  addcat(data) {
    return this.http.post(`${this.baseUrl}/addcat`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getcat() {
    return this.http.get(`${this.baseUrl}/getcat`)
  }
  addpeople(data) {
    return this.http.post(`${this.baseUrl}/addpeople`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getpeople() {
    return this.http.get(`${this.baseUrl}/getpeople`)
  }
}
