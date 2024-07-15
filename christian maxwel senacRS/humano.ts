class Humano {
    nome: string
    idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;

    }
    apresentar():void{
        console.log(`Me chamo:${this.nome}, e tenho:${this.idade}`)
    }
}

class Aluno extends Humano {
    curso: string
    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade)
        this.curso = curso;
    }
    estudar(): void {
        console.log(`Nome:${this.nome}, Idade:${this.idade}, E esta estudando o curso ${this.curso}`);
    }

}

class Veiculo {
    marca: string;
    ano: Number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }
    info(): void {
        console.log(`Marca do Veiculo:${this.marca}, Ano de Fabrição:${this.ano}}`)
    }
}

class Carro1 extends Veiculo {
    modelo: string

    constructor(marca: string, ano: number, modelo: string){
        super(marca, ano);
        this.modelo = modelo;
    }
    detalhes(): void{
        console.log(`Carro da marca:${this.modelo}, Ano do Veiculo:${this.ano}, Fabricação do Veiculo:${this.ano}`);
    }
}


let pessoa1 = new Humano("Christian", 19);
pessoa1.apresentar();

let aluno1 = new Aluno("Max", 19, "Programação");
aluno1.apresentar();
aluno1.estudar();

let veiculo1 = new Veiculo("Ferrari", 2023);
veiculo1.info;

let carro1 = new Carro1("La Ferrari", 2024, "Porche");
carro1.detalhes();

