import NotificationWrapper from "./NotificationWrapper.tsx";
import NotificationContent from "./NotificationContent.tsx";
import notificationIcon from "./NotificationIcon.tsx";
import NotificationSingleAction from "./NotificationSingleAction.tsx";
import NotificationDoubleActions from "./NotificationDoubleActions.tsx";

export const Notification = {
    wrapper: NotificationWrapper,
    content: NotificationContent,
    icon: notificationIcon,
    singleAction: NotificationSingleAction,
    doubleAction: NotificationDoubleActions,
}