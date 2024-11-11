import { Component } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  pokemonId: number = 0;
  pokemonImagen: string = this.getPokemonImage(this.pokemonId);
  currentPokemon: any; // Aquí deberías tener un tipo más específico

  handlePokemon(event: number) {
    this.pokemonId += event;

    if (this.pokemonId < 0) {
      this.pokemonId = 0;
    }

    if (this.pokemonId > 898) {
      this.pokemonId = 898;
    }

    this.pokemonImagen = this.getPokemonImage(this.pokemonId);
    this.loadPokemonStats(); // Cargar estadísticas del Pokémon
  }

  private getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  private loadPokemonStats() {
    // Simulando una carga de estadísticas
    // Aquí deberías obtener las estadísticas reales de tu servicio o API
    this.currentPokemon = {
      vida: Math.floor(Math.random() * 100),
      ataque: Math.floor(Math.random() * 100),
      defensa: Math.floor(Math.random() * 100),
    };
  }
}