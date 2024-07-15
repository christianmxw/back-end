// Avaliacao.ts
import { IAvaliavel } from "./IAvaliavel";
import { feedback } from "./feedback";
import { Freelancer } from "./freeLancer";
import { Projeto } from "./projeto";

export class Avaliacao implements IAvaliavel {
    private freelancer: Freelancer;
    private projeto: Projeto;
    private nota: number;
    private feedback: feedback | null;

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number,) {
        this.freelancer = freelancer;
        this.projeto = projeto;
        this.nota = nota;
        this.feedback = null;
    }
    adicionarFeedBack(feedback: feedback): void {
        if (this.projeto.isConcluido()) {
            this.feedback = feedback;
        } else {
            throw new Error("O projeto deve estar concluido para adicionar")
        }
    }
    avaliar(): void {
        if (this.projeto.isConcluido()) {
            console.log(`nota: ${this.nota}, freelancer: ${this.freelancer.getNome()}`);
            if (this.feedback) {
                console.log(`feedBack do cliente: ${this.feedback.getComentario()}, nota: ${this.feedback.getNota}`);
            }
        } else {
            console.log("o projeto nao esta concluido, nao é possivel avalair.")
        }

    }
    public getFeedBack(): feedback | null {
        return this.feedback
    }
}
