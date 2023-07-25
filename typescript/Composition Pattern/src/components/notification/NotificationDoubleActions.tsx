interface NotificationDoubleActionsProps {
    actions: {
        accept: ()=> void,
        decline: ()=> void
    }
}

function NotificationDoubleActions({actions} : NotificationDoubleActionsProps) {
    return (
        <div className={'container_actions'}>
            <button onClick={actions.accept}><i className="fa-solid fa-circle-check"></i></button>
            <button onClick={actions.decline}><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
}

export default NotificationDoubleActions;