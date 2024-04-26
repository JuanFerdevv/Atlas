import { Component,OnInit  } from '@angular/core';
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

  constructor(public route: ActivatedRoute, public  proyectosService: ProjectsService){}
  
  ngOnInit() {  
    this.route.params.subscribe(parametros=>{

      this.proyectosService.getProyecto(parametros['id'])
      .subscribe((proyecto: any)=>{
        const project: ProjectDescription = proyecto;
        console.log(project);
      });

    });
  }
}
