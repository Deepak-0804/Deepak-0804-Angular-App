import { Component, computed, signal } from '@angular/core';
import { MissiondetailsService } from '../../../core/services/missiondetailsService/missiondetails-service';
import { ActivatedRoute, Router } from '@angular/router';
import {map, switchMap } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { MissionDetail } from '../../../models/mission-card';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-mission-details',
  imports: [AsyncPipe],
  templateUrl: './mission-details.html',
  styleUrl: './mission-details.css'
  

})
export class MissionDetails {
 constructor(private missiondetailsService: MissiondetailsService, private route: ActivatedRoute) { }

  missionDetails$! : Observable<MissionDetail>;

  ngOnInit() {
      this.missionDetails$ = this.route.paramMap.pipe(
        map(params=> Number(params.get('id'))),
        switchMap((id:number) => this.missiondetailsService.getmissionDetailsInDetail(id))
    ); 
  }

}
