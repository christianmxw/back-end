class Empregado{
    nome: string;
    salario: number;

        constructor(nome: string, salario: number){
            this.nome = nome;
            this.salario = salario;
        }

        trabalhar(): void{
            console.log(`Empregado:${this.nome} esta trabalhando`)
        }
}

class Gerente extends Empregado {
    departamento: string

    constructor(nome: string, salario: number, departamento: string){
        super(nome, salario);
        this.departamento = departamento;
    }
    trabalhar(): void{
        console.log(`Gerente:${this.nome}, do departamento:${this.departamento}`)
    }
    supervisionar(): void{
        console.log(`Gerente:${this.nome}, esta supervisionando o departamento:${this.departamento}`);
    }
}

let empregado1 = new Empregado("Mário", 4000);
empregado1.trabalhar();

let gerente1 = new Gerente("Stephany", 16, "TI")
gerente1.trabalhar();
gerente1.supervisionar();