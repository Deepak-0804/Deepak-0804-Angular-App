import { Component } from '@angular/core';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { Banner } from '../../banner/banner';
import { CommonModule } from '@angular/common';
import { Api } from '../../core/services/api/api';
import { MenuSubChild } from '../../models/menu.model';
import { MissionService } from '../../core/services/missionservice/mission-service';
import { MissionCard } from '../../models/mission-card';

@Component({
  selector: 'app-mission',
  imports: [Banner, CommonModule],
  templateUrl: './mission.html',
  styleUrl: './mission.css',
  standalone: true,
  providers: [MissionService]
})
export class Mission {
  constructor(private api: Api, private missionService: MissionService, private router: Router, private route: ActivatedRoute) { }

  menuSubChild: MenuSubChild | undefined;
  page: number = 0;
  size: number = 5;
  missions: MissionCard[] = [];


  ngOnInit() {
    this.missionService.getMissionDetails().subscribe(data => {
      this.menuSubChild = data;
    });

    this.loadMissions();
  }

  hasMore = true;

  loadMissions() {
    this.missionService
      .getMissioncardDetails(this.page, this.size)
      .subscribe((data: MissionCard[]) => {
        // 🔴 If backend returns empty → stop
        if (data.length === 0) {
          this.hasMore = false;
          return;
        }
        this.missions = [...this.missions, ...data];
      });
  }

  loadMore() {
    this.page++;
    this.loadMissions();
  }

  onExpand(mission: MissionCard) {
    this.router.navigate(['mission-details', mission.id],{ relativeTo: this.route });
  }
}
