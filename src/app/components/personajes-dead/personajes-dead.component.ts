import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-personajes-dead',
  templateUrl: './personajes-dead.component.html',
  styleUrls: ['./personajes-dead.component.css']
})
export class PersonajesDeadComponent implements OnInit {
  title: string = "Aquí muestro solo personajes DEAD!!"
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
