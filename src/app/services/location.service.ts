
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
/*import { ApiResponse } from '../models/apiResponse';*/
import { Regiones } from '../models/region';
import { environment } from 'src/environments/environment';
import { Comuna } from '../models/comuna';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http:HttpClient) { }


getRegion():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/region`);


getComuna(regionId:number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/comuna/` + regionId);
  }
}

