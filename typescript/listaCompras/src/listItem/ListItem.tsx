import React from 'react';
interface listItemProps{
    item: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    list: Array<string>
}


function ListItem({item, setList, list} : listItemProps) {
    const [isEditing, setIsEditing] = React.useState<boolean>(false)
    const [editedItem, setEditedItem] = React.useState<string>(item)
    const index = list.indexOf(item)

    function delItem(){
        list.splice(index, 1)
        setList([...list])
        console.log(list)
    }

    function editItem(){
        list[index] = editedItem
        setList([...list])
        setIsEditing(false)
    }



    return (
        <div className={'container_listItem'}>
            {isEditing
                ? <input
                    onChange={({target})=> setEditedItem(target.value)}
                    value={editedItem}/>
                :  <span >{item}</span> }

            { isEditing
                ? <button onClick={editItem}><i className="fa-solid fa-check show"></i></button>
                : <button onClick={()=> setIsEditing(true)}><i className="fa-regular fa-pen-to-square show"></i></button> }

            <button onClick={delItem}><i className="fa-solid fa-trash show"></i></button>
        </div>
    );
}

export default ListItem;