class Funcionarios {
nome: string;
salario: number;
cargo: string;

constructor(nome: string, cargo:string, salario: number){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

aumentarSalario(percentualAumento: number):void {
    const aumento = this.salario * (percentualAumento / 100)
    this.salario+= aumento;
}
exibirSalarioAtual():void{
    console.log(`Novo Salario de: ${this.nome}, ${this.cargo}: R$ ${this.salario.toFixed(2)}`)
}
}
let funcionaro = new Funcionarios(`Christian`, `Programador`, 10000);
console.log(`Salario do Individuo ${funcionaro.nome}, ${funcionaro.cargo}: R$ ${funcionaro.salario.toFixed(3)}`);
funcionaro.aumentarSalario(10);
funcionaro.exibirSalarioAtual();
