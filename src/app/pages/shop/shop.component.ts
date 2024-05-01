import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  constructor(public shopService: ShopService) {}
  ngOnInit() { }
}
