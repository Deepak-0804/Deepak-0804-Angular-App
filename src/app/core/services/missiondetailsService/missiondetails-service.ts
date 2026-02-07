import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class MissiondetailsService {
  
  constructor(private api:Api){} 

  getmissionDetailsInDetail(id: number) {
    return this.api.getmissionDetails(id);
  }
  
}
