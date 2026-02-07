import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../../core/services/api/api';
import { MenuItem, MenuChild } from '../../../models/menu.model';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar implements OnInit {

  constructor(private api: Api) { }


  isFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > 50; // adjust threshold
  }

  menuItems: MenuItem[] = [
    { label: 'About', fragment: 'about-us', open: false, children: [] },
    { label: 'Portfolio', fragment: 'portfolio', open: false, children: [] },
    { label: 'Services', fragment: 'services', open: false, children: [] },
    { label: 'Contact', fragment: 'contact', open: false, children: [] }
  ];

  ngOnInit() {
    // Automatically load children for each parent (if needed)
    this.menuItems.forEach(parent => this.loadChildren(parent));
  }


  loadChildren(parent: MenuItem) {
    this.api.getChildMenuItems(parent.label).subscribe({
      next: (data) => {
        parent.children = data.map((child: any) => ({
          label: child.label,
          route: child.route,
          icon: child.icon || 'bi-circle',
          color: child.color || '#6c757d'
        }));
      },
      error: (err) => console.error('Error loading child menu:', err)
    });
  }

}
