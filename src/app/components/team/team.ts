import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Banner } from '../../banner/banner';
import { CommonModule } from '@angular/common';
import { Api } from '../../core/services/api/api';
import { MenuSubChild } from '../../models/menu.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule, Banner, CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team implements OnInit {
  constructor(private api: Api) { }
    menuSubChild: MenuSubChild | undefined;
  
    ngOnInit() {
      this.api.getChildMenuItemsDetails('Team').subscribe(data => {
        this.menuSubChild = data;
      });
    }

}
