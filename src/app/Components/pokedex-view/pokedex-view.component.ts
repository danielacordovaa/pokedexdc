import { Component } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonId : number=0;
  pokemonImagen:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.pokemonId+'.png';
handlePokemon(event:number){
  this.pokemonId+=event;
}


}
