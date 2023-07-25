
function NotificationContent({text} : {text: string}) {
    return (
        <div className={'container_content'}>
            <h3>{text}</h3>
            <p>Convite há x minutos</p>
        </div>
    );
}

export default NotificationContent;