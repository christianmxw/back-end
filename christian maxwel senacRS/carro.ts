class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    descricao(): void {
        console.log(`Carro Modelo: ${this.modelo}, Marca: ${this.marca}, Ano do Carro: ${this.ano}`)
    }
}
const carro = new Carro("Ferrari", "LaFerrari", 2024);
carro.descricao();