import { Pessoa } from "./pessoa";
export class Cliente extends Pessoa{
    constructor(nome: string, email: string){
        super(nome, email);
    }
    public obterTipo(): string {
        return 'Cliente';
    }
}