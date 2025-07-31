import { GuideLayout } from "@/components/guide-layout"
import { HeroSection } from "@/components/hero-section"
import { GuideSection } from "@/components/guide-section"
import { TipList } from "@/components/tip-list"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"

// Imagens originais da pasta local
const imageMap = {
  primeiroPassos: "imagens/2.jpg",
  montagemCarro: "imagens/3.jpg", 
  manutencao: "imagens/4.jpg",
  trabalhos: "imagens/10.jpg",
  dicas: "imagens/5.jpg",
  dirigindo: "imagens/6.jpg",
  personalizacao: "imagens/7.jpg",
  habilidades: "imagens/8.jpg",
  sobrevivencia: "imagens/9.jpg"
}

const dicas = [
  {
    title: "Salve o jogo",
    description: "Use o banheiro para salvar. Salvar após conquistas importantes evita frustrações."
  },
  {
    title: "Evite morrer",
    description: "Não coma comidas estragadas, não durma no meio da estrada, e não dirija bêbado."
  },
  {
    title: "Fique atento ao inventário",
    description: "Carregue chaves de boca, óleo, gasolina e peças de reposição quando for longe."
  },
  {
    title: "Estude a mecânica",
    description: "Saber como funciona um motor é quase obrigatório para jogar bem. Pesquise fora do jogo se necessário."
  }
]

const Index = () => {
  return (
    <GuideLayout>
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <HeroSection />
        
        {/* Introdução */}
        <Card className="shadow-card border-border">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Se você está começando em <strong className="text-foreground">My Summer Car</strong>, este é o guia ideal para te ajudar a entender cada detalhe importante deste simulador finlandês de sobrevivência, mecânica e caos automotivo. Com uma curva de aprendizado íngreme e muitos elementos interligados, este jogo testa sua paciência, dedicação e habilidades de observação. Desde o momento em que você acorda na casa de seus pais até completar a montagem do famoso Satsuma, cada passo exige atenção. Este guia foi feito pensando em você que quer aproveitar ao máximo a experiência.
            </p>
          </CardContent>
        </Card>

        <GuideSection
          id="primeiros-passos"
          title="1. Primeiros Passos"
          imageSrc={imageMap.primeiroPassos}
          imageAlt="Primeiros Passos"
        >
          <p>
            Ao iniciar o jogo, você acorda em uma casa simples, no meio da zona rural da Finlândia. O silêncio ao redor, o rádio finlandês tocando músicas aleatórias e a bagunça da sua garagem logo mostram que o jogo será tão cômico quanto desafiador. A primeira coisa a se fazer é explorar a casa e entender o funcionamento do HUD, que mostra indicadores como sede, fome, urina, stress, sujidade, fadiga e saúde.
          </p>
          <p>
            Esses elementos são fundamentais para sua sobrevivência. Lembre-se: morrer significa perder todo o progresso caso você não tenha salvo. Então, familiarize-se com o ambiente e aprenda a cuidar de você mesmo antes de sair para aventuras maiores.
          </p>
        </GuideSection>

        <GuideSection
          id="montagem-carro"
          title="2. Montagem do Carro"
          imageSrc={imageMap.montagemCarro}
          imageAlt="Montagem do Carro"
        >
          <p>
            A montagem do Satsuma é o coração do jogo. Todas as peças estão disponíveis na garagem, mas não há instruções no jogo — você precisa saber o que fazer, na ordem certa. São dezenas de parafusos, peças, ajustes e testes. Montar o carro não é apenas colocar as peças — é entender como um motor de combustão funciona.
          </p>
          <p>
            Você vai precisar instalar o bloco do motor, o virabrequim, pistões, cabeçote, carburador, sistema de escape, suspensão, direção, e por aí vai. Prepare-se para errar, desmontar e tentar de novo. Ter um guia de montagem ou vídeos abertos pode ser um grande auxílio. E lembre-se: torque errado, peças mal colocadas ou esquecidas resultarão em problemas sérios na hora de dar a partida no carro.
          </p>
        </GuideSection>

        <GuideSection
          id="manutencao"
          title="3. Manutenção e Sobrevivência"
          imageSrc={imageMap.manutencao}
          imageAlt="Manutenção e Sobrevivência"
        >
          <p>
            O personagem precisa comer, dormir, urinar, tomar banho e relaxar. Alimentos estão na geladeira, mas tudo acaba — é preciso ir até a cidade para reabastecer. Para tomar banho, entre no chuveiro. Para reduzir o stress, você pode beber, fumar, tomar café ou usar a sauna.
          </p>
          <p>
            Se negligenciar qualquer uma dessas necessidades, a consequência pode ser a morte. Por isso, mantenha uma rotina equilibrada, e sempre pense duas vezes antes de dirigir com sono ou embriagado. O jogo não perdoa erros, e um pequeno descuido pode acabar em acidente fatal — literalmente.
          </p>
        </GuideSection>

        <GuideSection
          id="trabalhos"
          title="4. Trabalhos e Grana"
          imageSrc={imageMap.trabalhos}
          imageAlt="Trabalhos e Grana"
        >
          <p>
            Dinheiro é essencial no jogo, principalmente para comprar peças de carro, mantimentos e gasolina. Há diversas formas de ganhar dinheiro honestamente: entregas de lenha, limpar fossas sépticas com o caminhão-tanque, entre outros. Cada trabalho tem sua dificuldade e risco, mas também recompensa bem.
          </p>
          <p>
            Trabalhar é uma maneira de explorar mais do mapa, conhecer NPCs e, claro, juntar grana para turbinar seu Satsuma com upgrades como carburador de corrida, radiador novo, suspensão esportiva, etc. E atenção: bater o carro pode gerar custos altos de reparo.
          </p>
        </GuideSection>

        <GuideSection
          id="dicas"
          title="5. Dicas Rápidas"
          imageSrc={imageMap.dicas}
          imageAlt="Dicas Rápidas"
        >
          <TipList tips={dicas} />
        </GuideSection>

        <GuideSection
          id="dirigindo"
          title="6. Dirigindo por Aí"
          imageSrc={imageMap.dirigindo}
          imageAlt="Dirigindo por Aí"
        >
          <p>
            Dirigir é uma parte fundamental da experiência. A direção é realista, sem assistência de volante ou GPS. Para os iniciantes, pode ser difícil manter o controle, mas com prática, você vai se acostumar. O carro tem uma velocidade razoável, mas é importante sempre checar o nível de combustível.
          </p>
          <p>
            Também é essencial saber quando parar para descansar e não exagerar nas longas viagens sem abastecer.
          </p>
        </GuideSection>

        <GuideSection
          id="personalizacao"
          title="7. Personalizando o Satsuma"
          imageSrc={imageMap.personalizacao}
          imageAlt="Personalizando o Satsuma"
        >
          <p>
            O Satsuma pode ser customizado de diversas maneiras, como aparência externa, suspensão, motor e mais. A personalização vai desde a troca de peças para melhorar o desempenho, até a pintura do carro. A estética é importante não só para seu gosto pessoal, mas também para o jogo em si — muitas vezes, é necessário andar com o carro bem ajustado para concluir missões com sucesso.
          </p>
        </GuideSection>

        <GuideSection
          id="habilidades"
          title="8. Aumentando sua Habilidade de Mecânica"
          imageSrc={imageMap.habilidades}
          imageAlt="Aumentando sua Habilidade de Mecânica"
        >
          <p>
            Para realizar uma boa montagem do carro, você precisa aumentar sua habilidade mecânica. Pratique mais, aprenda com os erros e acertos, e busque eficiência no trabalho. Quanto mais você aprende, mais peças pode substituir e mais facilmente consegue reparar o carro sem causar danos.
          </p>
        </GuideSection>

        <GuideSection
          id="sobrevivencia"
          title="9. Sobrevivendo ao Caos"
          imageSrc={imageMap.sobrevivencia}
          imageAlt="Sobrevivendo ao Caos"
        >
          <p>
            My Summer Car não é para qualquer um. É um jogo de paciência, aprendizado e adaptação. Pode ser frustrante, mas as recompensas de ver seu Satsuma rodando perfeitamente ou concluir um trabalho com sucesso fazem tudo valer a pena. Aproveite a jornada, e sempre tenha em mente que, no final, o caos é parte da diversão.
          </p>
        </GuideSection>

        {/* Conclusão */}
        <Card className="shadow-card border-border">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-4 text-left">
              Conclusão
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-left">
              <strong className="text-foreground">My Summer Car</strong> é mais que um simulador de carro — é um retrato da vida real, com todas as suas frustrações, conquistas e absurdos. Para quem gosta de jogos desafiadores, cheios de possibilidades e com liberdade total, este título é uma verdadeira joia. Dominar o jogo exige tempo e persistência, mas a recompensa é imensa. Quando ouvir o motor do Satsuma funcionando pela primeira vez após semanas de tentativa, entenderá o valor de cada esforço. Boa sorte e que a força do motor esteja com você!
            </p>
            
            <div className="pt-6">
              <WhatsAppButton />
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              &copy; 2025 - Todos os direitos reservados.
            </p>
          </CardContent>
        </Card>
      </div>
    </GuideLayout>
  );
};

export default Index;
