import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.css']
})
export class PieListComponent {
  trialData ="Trial Data";
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];

}
