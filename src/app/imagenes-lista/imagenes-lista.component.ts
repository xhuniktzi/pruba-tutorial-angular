import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-imagenes-lista',
  templateUrl: './imagenes-lista.component.html',
  styleUrls: ['./imagenes-lista.component.scss']
})
export class ImagenesListaComponent implements OnInit{
  listaNombres: string[] = [];
  @Output() nombreSeleccionado: EventEmitter<string> = new EventEmitter<string>();

  constructor(private pokemon: PokemonApiService) { }

  ngOnInit() {
    this.pokemon.getPokemonList(0, 35)
      .subscribe((data: any) => {
        data.results.forEach((pokemon: { name: string; }) => {
          this.listaNombres.push(pokemon.name);
        });
      });
  }

  selectImage(name: string) {
    this.nombreSeleccionado.emit(name);
  }
}
