import { Component,ElementRef,HostListener,OnInit  } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from '../../services/projects.service';
import {ProjectDescription} from '../../interfaces/info-proyecto-detalles.interface';



@Component({
  selector: 'app-proyecto-id',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, HttpClientModule],
  templateUrl: './proyecto-id.component.html',
  styleUrl: './proyecto-id.component.css'
})
export class ProyectoIdComponent implements OnInit {

  proyecto: ProjectDescription|undefined;
  id:string|undefined;

  constructor(public route: ActivatedRoute, public  proyectosService: ProjectsService, public elementRef: ElementRef){}
  
  ngOnInit() {  
    this.route.params.subscribe(parametros=>{

      this.proyectosService.getProyecto(parametros['id'])
      .subscribe((proyecto: any)=>{
        const project: ProjectDescription = proyecto;
        this.id=parametros['id'];
        this.proyecto=proyecto;
        console.log(project);
      });

    });
  }

  
}

