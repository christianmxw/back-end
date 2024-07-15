import { Cliente } from './cliente';
import { Freelancer } from './freeLancer';

export class Projeto {
    private titulo: string;
    private descricao: string;
    private freelancer: Freelancer | null;
    private cliente: Cliente;
    private concluido: boolean;

//control +D seleciona a palavras e todas iguas//

    constructor(titulo: string, descricao: string, cliente: Cliente,) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.freelancer = null;
        this.cliente = cliente;
        this.concluido = false;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    getFreelancer(): Freelancer | null {
        return this.freelancer;
    }
    setFreelancer(freelancer: Freelancer): void {
        this.freelancer = freelancer;
    }
    getCliente(): Cliente{
        return this.cliente;
    }
    setCliente(cliente: Cliente): void{
        this.cliente = cliente
    }
    marcaConcluido(): void{
        this.concluido = true;
    }
    isConcluido(): boolean{
        return this.concluido;
    }
}