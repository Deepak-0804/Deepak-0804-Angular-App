import { CommonModule } from '@angular/common'; // 👈 add this
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './core/services/api/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // 👈 add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
