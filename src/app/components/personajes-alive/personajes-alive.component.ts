import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-personajes-alive',
  templateUrl: './personajes-alive.component.html',
  styleUrls: ['./personajes-alive.component.css']
})
export class PersonajesAliveComponent implements OnInit {

  title: string = "Aquí muestro solo personajes ALIVE !!!"
  resultados: any[] = []
  constructor(protected personajesService: PersonajesService) { }

  ngOnInit() {
    this.personajesService.getPersonajes()
    .subscribe(
      (data) => { // Success
        this.resultados = data['results'];
      },
      (error) => {
        console.error(error);
      }
    )
    }
}
