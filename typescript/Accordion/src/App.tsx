import './css/reset.css'
import QAContainer from "./components/QAContainer.tsx";

export interface QAForms {
    question: string,
    answer: string
}

const QA: Array<QAForms> = [
    {
        question: 'Qual sua cor favorita?',
        answer: 'Vermelho. Vivo, forte, não tão claro. Mas amo preto e branco também.'
    },
    {
        question: 'Qual sua música preferida?',
        answer: 'Muito difícil. Eu não sei se tenho uma música preferida, mas músicas que sempre tocam na minha playslist são: Empty Corridors - Ben Howard, Madness - Muse, Throne - BTH, DeadCrush - Alt-J, MockingBird - Eminem. .'
    },
    {
        question: 'Qual o jogo da sua vida?',
        answer: 'Tenho muitos. De todas as épocas. Battlefield 4 me marcou, The Last of Us, FIFA STREET 2, Trilogia Batman Arkham, GTA V, eu tenho muitos muitos. '
    },
    {
        question: 'Melhor filme?',
        answer: 'Memento/Amnésia. Christopher Nolan simplesmente gênio desde sempre.'
    }
]

function App() {


  return (
    <main id={'page'}>
        <article id={'QAContainer'}>
            <h1>Perguntas e Respostas sobre mim</h1>
        {QA.map((item,i)=> <QAContainer key={i} QA={item}/>)}
        </article>

    </main>
  )
}

export default App
