import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-personajes-unknown',
  templateUrl: './personajes-unknown.component.html',
  styleUrls: ['./personajes-unknown.component.css']
})
export class PersonajesUnknownComponent implements OnInit {
  title: string = "Aquí muestro solo personajes UNKNOWN!!"
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
