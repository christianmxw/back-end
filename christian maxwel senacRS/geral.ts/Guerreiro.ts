import { Personagem } from "./personagem;
class Guerreiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }
    golpeDuplo(): void {
        const socosForte = this.getAtaque()
        this.setAtaque(socosForte * 3)
        console.log(`${this.getAtaque} SocosForte ultilizado ${this.getAtaque}`);
        this.getAtaque();
    }
}