import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tutorial-angular';
  nombreSeleccionado!: string;

  handleNameSelected(name: string) {
    this.nombreSeleccionado = name;
  }
}
