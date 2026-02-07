import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,Navbar,Footer,RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
