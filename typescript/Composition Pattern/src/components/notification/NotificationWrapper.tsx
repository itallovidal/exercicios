import {ReactNode} from "react";

function NotificationWrapper({children}: {children: ReactNode}) {
    return (
        <div className={'container_notification'}>
            {children}
        </div>
    );
}

export default NotificationWrapper;