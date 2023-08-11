import  './global.module.css'
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Home/Profile/Profile.jsx";
import Post from "./components/Home/Post/Post.jsx";
import styles from './app.module.css';
import {data, user} from './assets/data.jsx'
import React from "react";
function App() {
    const [userData, setUserData] = React.useState(user)
  return (
    <>
        <Header/>
        <main className={styles.container}>
            <Profile user={userData} setUser={setUserData}/>
            <article >
                {data.posts.map((item)=> <Post user={userData} key={item.id} data={item}/>)}
            </article>
        </main>
    </>
  )
}

export default App
