import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [HttpClientModule,  CommonModule, RouterLink],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent  implements OnInit{

  constructor(public proyectosService: ProjectsService) {}
    ngOnInit() { }
  
}
