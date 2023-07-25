import './css/app.css'
import {Notification} from "./components/notification";

const actions ={
    accept: ()=> console.log('aceitou'),
    decline: ()=> console.log('declinou')
}

function App() {
  return (
      <main id={'page'}>
        <Notification.wrapper>
            <Notification.icon/>
            <Notification.content text={'Oi, sou incrível!'}/>
            <Notification.doubleAction actions={actions}/>
        </Notification.wrapper>

        <Notification.wrapper >
          <Notification.icon/>
          <Notification.content text={'Oi, ela é incrível!'}/>
          <Notification.singleAction action={actions.accept}/>
        </Notification.wrapper>

        <Notification.wrapper>
          <Notification.content text={'Oi, nós somos incríveis!'}/>
          <Notification.singleAction action={actions.accept}/>
        </Notification.wrapper>

        <Notification.wrapper>
          <Notification.icon/>
          <Notification.content text={'Oi, esquiszoz'}/>
        </Notification.wrapper>
      </main>

  )
}

export default App
