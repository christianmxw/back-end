import { Personagem } from "./Peronagem";
class Arqueiro extends Personagem{
constructor(nome: string, vida: number, ataque:number){
    super(nome, vida, ataque);
}

ataquePreciso(): void{
    console.log(`${this.getNome()} realiza um ataque preciso!`)
}
}