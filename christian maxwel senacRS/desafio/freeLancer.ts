import { Pessoa } from './pessoa';
import { Projeto } from './projeto';

export class Freelancer extends Pessoa {
    private areaDeEspecializacao: string;
    private projetos: Projeto[];

    constructor(nome: string, email: string, areaDeEspecializacao: string) {
        super(nome, email);
        this.areaDeEspecializacao = areaDeEspecializacao;
        this.projetos = [];
    }
    getAreaDeEspecializacao(): string {
        return this.areaDeEspecializacao;
    }
    setAreaDeEspecializao(areaDeEspecializacao: string): void {
        this.areaDeEspecializacao = areaDeEspecializacao;
    }
    adicionarProjeto(projeto: Projeto): void {
        this.projetos.push(projeto);
    }

    removerProjeto(projeto: Projeto): void {
        const index = this.projetos.indexOf(projeto);
        this.projetos.splice(index, 1);
    }
    listaDeProjetos(): Projeto[] {
        return this.projetos;
    }
    obterTipo(): string {
        return "Freelancer";
    }
}