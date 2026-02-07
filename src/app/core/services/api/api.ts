import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuChild, MenuSubChild} from '../../../models/menu.model';
import { Clientdetails } from '../../../models/client-details.model';
import { environment } from '../../../../environments/environment.development';
import { MissionCard, MissionDetail } from '../../../models/mission-card';


@Injectable({
  providedIn: 'root'
})
export class Api {
  public readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(`${this.apiUrl}/WeatherForecast`);
  }

  login(username: string, password: string): Observable<{ token: string }> {
    //return this.http.post<{ token: string }>('${this.apiUrl}/login`', { username, password });
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/Auth/login`, { username, password });
  }

  getChildMenuItems(parentLabel: string): Observable<MenuChild[]> {
    return this.http.get<MenuChild[]>(`${this.apiUrl}/api/Menu/children/${parentLabel}`);
  }

  getChildMenuItemsDetails(Label: string): Observable<MenuSubChild> {
    return this.http.get<MenuSubChild>(`${this.apiUrl}/api/Menu/subchildren/${Label}`);
  }

  getClientDetailsById(companyId: number): Observable<Clientdetails> {
    return this.http.get<Clientdetails>(`${this.apiUrl}/api/Clients/client/${companyId}`);
  }

  getPaginatedChildMenuItemsDetails(page: number, size: number): Observable<MissionCard[]> {
    return this.http.get<MissionCard[]>(`${this.apiUrl}/api/Mission/paginatedSubchildren/?page=${page}&size=${size}`);
  }

  getmissionDetails(id: number): Observable<MissionDetail> {
    return this.http.get<MissionDetail>(`${this.apiUrl}/api/Mission/missionDetails/${id}`);
  }

}
