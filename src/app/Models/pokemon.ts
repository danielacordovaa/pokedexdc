export class Pokemon { /**  Representacion de un objeto existente */
/*No movimientos no habilidades*/ 
private id: number;
private nombre:string;
private vida: number;
private ataque:number;
private defensa: number;
private tipo: string;
constructor(id_recibido:number, nombre_recibido:string, vida_recibida:number, ataque_recibido:number, defensa_recibida:number, tipo_recibido:string){
    this.id=id_recibido;//recibiendo el id como parametro en mi clase
    this.nombre=nombre_recibido;//recibiendo el NOMBRE como parametro en mi clase
    this.vida=vida_recibida;//recibiendo la vida como parametro en mi clase
    this.ataque=ataque_recibido;//recibiendo el ataque como parametro en mi clase
    this.defensa=defensa_recibida;//recibiendo la defensa como parametro en mi clase
    this.tipo=tipo_recibido;//recibiendo el tipo como parametro en mi clase  
}
atacar(){
    console.log("Estoy atacando");

}
defender(){
    console.log("Estoy defendiendo");
}
quitarVida(cantidad:number){
    this.vida=this.vida-cantidad;
}	
agregarVida(cantidad:number){
    this.vida=this.vida+cantidad;
}
__str(){
    console.log('ID: $ {this.id}, Nombre: $ {this.nombre}, Vida: $ {this.vida}, Ataque: $ {this.ataque}, Defensa: $ {this.defensa}, Tipo: $ {this.tipo}');
}
/*2. - ENCAPSULAMIENTO*/
}
