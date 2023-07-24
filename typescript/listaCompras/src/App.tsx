import React, {FormEvent} from 'react'
import './css/app.css'
import ListItem from "./listItem/ListItem.tsx";

function App() {
    const [list, setList] = React.useState<Array<string>>([])
    const [newItem, setNewItem] = React.useState<string | null>(null)
    const inputRef : React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null)


    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        if (newItem){
            if(list.includes(newItem)){
                console.log('ja temos esse produto!')
                return
            }

            setList(prev=> [...prev, newItem])
            setNewItem('')
            inputRef.current!.value = ''
        }
    }

    function clearList(){
        setList([])
        setNewItem('')
        inputRef.current!.value = ''
    }

  return (
    <main>
        <article>
            <h1>Lista de Compras</h1>

            <form action="" onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    onChange={({target})=> setNewItem(target.value)}
                    placeholder={'ovos'}/>

                <button type={'submit'}>Adicionar</button>
            </form>

            <section>
                {list.map((item, i)=> <ListItem key={i} item={item} list={list} setList={setList} />)}
            </section>

            <button onClick={clearList} id={'btn_clear'}> Limpar Lista </button>
        </article>
    </main>
  )
}

export default App
