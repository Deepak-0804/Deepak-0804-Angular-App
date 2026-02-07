import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Api } from '../core/services/api/api';
import { Clientdetails } from '../models/client-details.model';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './client-details.html',
  styleUrl: './client-details.css'
})

export class ClientDetails implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { companyId: number }, public dialogRef: MatDialogRef<ClientDetails>, private api: Api) { }

  ngOnInit() {
    console.log('Company ID:', this.data.companyId);
    this.fetchClientDetails(this.data.companyId);
  }
  
  details: Clientdetails | null = null;

  fetchClientDetails(companyId: number) {
    this.api.getClientDetailsById(companyId).subscribe((details) => {
      this.details = details;
    });
  }
}
