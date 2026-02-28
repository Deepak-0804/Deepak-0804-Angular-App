import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Features } from '../features/features';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header,Features,Testimonials,Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
