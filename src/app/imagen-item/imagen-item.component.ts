import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-imagen-item',
  templateUrl: './imagen-item.component.html',
  styleUrls: ['./imagen-item.component.scss']
})
export class ImagenItemComponent implements OnInit {
  @Input() nombre!: string;
  spriteUrl!: string;

  constructor(private pokemon: PokemonApiService) { }

  ngOnInit() {
    this.pokemon.getPokemonByName(this.nombre)
      .subscribe((data: any) => {
        this.spriteUrl = data.sprites.front_default;
      });
  }
}
