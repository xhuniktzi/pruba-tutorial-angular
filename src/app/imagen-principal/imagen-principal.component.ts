import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-imagen-principal',
  templateUrl: './imagen-principal.component.html',
  styleUrls: ['./imagen-principal.component.scss']
})
export class ImagenPrincipalComponent implements OnChanges {
  @Input() nombre!: string;
  spriteUrl!: string;
  constructor(private pokemon: PokemonApiService) { }

  ngOnChanges() {
    if (this.nombre) {
      this.pokemon.getPokemonByName(this.nombre)
        .subscribe((data: any) => {
          this.spriteUrl = data.sprites.front_default;
        });
    }
  }
}
