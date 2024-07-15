 export class Personagem {
    private nome: string;
    private vida: number;
    private ataque: number;
    constructor(nome: string, vida: number, ataque: number) {
        this.nome = nome;
        this.vida = vida
        this.ataque = ataque;
    }
    getNome(): string {
        return this.nome
    }
    getVida(): number {
        return this.vida
    }
    getAtaque(): number {
        return this.ataque
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setVida(vida: number): void {
        this.vida = vida;
    }
    setAtaque(ataque: number): void {
        this.ataque = ataque;
    }
    atacar(): void{
    console.log(` ${this.nome} atacou ${this.ataque} de dano`)
}
}