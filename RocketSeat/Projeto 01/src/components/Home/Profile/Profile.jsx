import React from 'react';
import Button from "../../GlobalComponents/Button/Button.jsx";
import styles from './profile.module.css'
import ProfilePicture from "../../GlobalComponents/ProfilePicture/ProfilePicture.jsx";

function Profile({user, setUser}) {
    const [isEditing, setIsEditing] = React.useState(false)
    const[name, setName] = React.useState(null)
    const[role, setRole] = React.useState(null)

    console.log(user)

    function toggleEdit(){
        setIsEditing(!isEditing)
    }

    function editUser(){
        setUser((prev)=>{
            return {...prev,
                username: name !== null && name.length > 3   ? name : prev.username ,
                role: role !== null && role.length > 3  ? role : prev.role
            }
        })
        setIsEditing(!isEditing)
        console.log('foi!')
    }

    return (
        <aside className={styles.container}>
            <div className={styles.header}>
                <div className={styles.wrapperPerfil}>
                    <ProfilePicture styleChosen={'outlined'} picturePath={user.profilePicture}/>
                </div>
            </div>

            <div className={styles.body} >
                {isEditing
                    ? <input onChange={({target})=> setName(target.value) }
                             className={styles.input}
                             type="text"
                             value={name !== null ? name : user.username}/>

                    : <h1 className={styles.title}>{user.username}</h1>
                }

                {isEditing
                    ? <input onChange={({target})=> setRole(target.value) }
                             className={styles.input}
                             type="text"
                             value={role !== null ? role : user.role}/>

                    : <span className={styles.subtitle}>{user.role}</span>
                }

            </div>

            <div className={styles.footer}>
                {isEditing
                    ? <Button onClick={editUser} styleChosen={'filled'}>
                        <i className="fa-solid fa-circle-check"></i>
                        Concluir!
                    </Button>
                    : <Button onClick={toggleEdit} styleChosen={'filled'}>
                        <i className="fa-solid fa-pen-to-square"></i>
                        Editar seu Perfil
                    </Button>
                }
            </div>
        </aside>
    );
}

export default Profile;