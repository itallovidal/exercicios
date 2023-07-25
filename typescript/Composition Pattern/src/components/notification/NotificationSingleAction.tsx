interface NotificationSingleActionProps{
    action: ()=> void
}


function NotificationSingleAction({action} : NotificationSingleActionProps) {
    return (
        <div className={'container_actions'}>
            <button onClick={action}><i className="fa-solid fa-circle-check"></i></button>
        </div>
    )
}

export default NotificationSingleAction;