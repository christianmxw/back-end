
import { Freelancer } from "./freeLancer";
import { Projeto } from "./projeto";
import { Avaliacao } from "./avaliacao";
import { feedback } from "./feedback";
import { Cliente } from "./cliente";

const freelancer1 = new Freelancer("João", "joao@email.com", "Desenvolvimento Web");
const freelancer2 = new Freelancer("Maria", "maria@email.com", "Design Gráfico");

const cliente1 = new Cliente ('Marco', 'marcoAurelio@.com',)
const cliente2= new Cliente ('Nicoly', 'nicolyMonteiro@.com')


const projeto1 = new Projeto('Website Corporativo', 'Desenvolvimento de um site institucional', cliente1);
const projeto2 = new Projeto("Logotipo Redesign", "Atualização do logotipo da empresa", cliente2 );

projeto1.marcaConcluido();
projeto2.marcaConcluido();

projeto1.setFreelancer(freelancer1);
projeto2.setFreelancer(freelancer2);

const feedBack1 =new feedback(cliente1, projeto1, 'mal feito, vai trabalhar mais.', 2);
const feedback2 =new feedback(cliente2, projeto2, 'Parabens, Trabalho bem Feito ツ', 9);

const avaliacao1 = new Avaliacao(freelancer1, projeto1, 9)
avaliacao1.adicionarFeedBack(feedBack1)
const avaliacao2 = new Avaliacao(freelancer2, projeto2, 8)
avaliacao2.adicionarFeedBack(feedback2)

avaliacao1.avaliar();
avaliacao2.avaliar();