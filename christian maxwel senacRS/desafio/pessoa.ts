export abstract class Pessoa {
    private nome: string;
    private email: string;
    constructor(nome: string, email: string,) {
        this.nome = nome
        this.email = email
    }
    getNome(): string {
        return this.nome
    }
    getEmail(): string {
        return this.email
    }
    setNome(): string {
        return this.nome
    }
    setEmail(): string {
        return this.email
    }
    abstract obterTipo(): string;
}