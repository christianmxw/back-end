



class Mago extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }
    bolaDeFogo(): void {
        console.log(`${this.getAtaque}, Bola de fogo Lançada ${this.getAtaque() * 5}`)
    }
}
class Arqueiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }
    ataquePreciso(): void {
        console.log(`${this.getAtaque}, Ataque Presciso Lançado ${this.getAtaque() * 6}`)
    }
}

const Lanca = new Guerreiro("Cosmo", 300, 25)
const Magia = new Mago("Vanda", 350, 30)
const Arco = new Arqueiro("Arquenes", 400, 35)

Lanca.atacar();
Lanca.golpeDuplo();

Magia.atacar();
Magia.bolaDeFogo();

Arco.atacar();
Arco.ataquePreciso();
/*  */