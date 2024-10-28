import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  
@Input({required:true})imageUrl : string='';
@Output() clickPokemon = new EventEmitter<number>();
  previoPokemon(){
    this.clickPokemon.emit(-1);

}
siguientePokemon(){
  this.clickPokemon.emit(1);
}
}
