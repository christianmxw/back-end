import { Cliente } from "./cliente";
import { Projeto } from "./projeto";

export class feedback {
    private cliente: Cliente;
    private projeto: Projeto;
    private comentario: string;
    private nota: number;

    constructor(cliente: Cliente, projeto: Projeto, comentario: string, nota: number){
        this.cliente =cliente;
        this.projeto =projeto;
        this.comentario =comentario;
        this.nota = nota;
    }
    getCliente(): Cliente{
        return this.cliente;
    }
    getProjeto(): Projeto{
        return this.projeto;
    }
    getComentario(): string {
        return this.comentario
    }
    getNota(): number{
        return this.nota
    }
    setNota(nota: number): void{
        this.nota = nota;
    }   
}