import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()

export class MissionService {
constructor(private api: Api) { }

  getMissionDetails() {
    return this.api.getChildMenuItemsDetails('Mission');
  }

  getMissioncardDetails(page: number, size: number) {
    return this.api.getPaginatedChildMenuItemsDetails(page, size);
  }
}
