import { Component, OnInit } from '@angular/core';
import { Banner } from '../.././banner/banner';
import { Api } from '../../core/services/api/api';
import { MenuSubChild } from '../../models/menu.model';
import { CommonModule } from '@angular/common';
import { ClientDetails } from '../../client-details/client-details';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [Banner, CommonModule, MatDialogModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})

export class AboutUs implements OnInit {
  constructor(private api: Api, private dialog: MatDialog) { }
  menuSubChild: MenuSubChild | undefined;

   selectedCompanyId: number | null = null

  ngOnInit() {
    this.api.getChildMenuItemsDetails('About Us').subscribe(data => {
      this.menuSubChild = data;
    });
  }

  openClient(id: number) {
    this.dialog.open(ClientDetails,{
      width: '80vw',
      maxWidth:'100vw',
      maxHeight:'100vh',
      height:'90vh',
      data:{companyId: id}
    });
  }



}
