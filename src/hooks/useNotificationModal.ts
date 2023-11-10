import { useContext } from 'react';
import { NotificationContext } from '@/components/NotificationsContext/NotificationContext';
import { NotificationMessage } from '@/enums';

export const useNotificationModal = (errorMsg: string, successMsg: string) => {
    const { setIsModalOpen, setType, setMessage } =
        useContext(NotificationContext);

    return {
        onError: () => {
            setMessage(errorMsg);
            setType(NotificationMessage.ERROR);
            setIsModalOpen(true);
        },
        onSuccess: () => {
            setMessage(successMsg);
            setType(NotificationMessage.SUCCESS);
            setIsModalOpen(true);
        },
    };
};
