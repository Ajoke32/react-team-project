import { createContext, ReactNode, useContext, useState } from 'react';
import { NotificationMessage } from '@/enums';
import { NotificationContextType } from '@/types/notification';

const defaultValue: NotificationContextType = {
    message: '',
    type: NotificationMessage.None,
    setType: () => {},
    setMessage: () => {},
    setIsModalOpen: () => {},
    isModalOpen: false,
};
export const NotificationContext =
    createContext<NotificationContextType>(defaultValue);

interface Props {
    children: ReactNode;
}
export const NotificationContextWrapper = ({ children }: Props) => {
    const [message, setMessage] = useState<string>('');
    const [type, setType] = useState<NotificationMessage>(
        NotificationMessage.None,
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <NotificationContext.Provider
                value={{
                    message: message,
                    setMessage: setMessage,
                    type: type,
                    setType: setType,
                    isModalOpen: isOpen,
                    setIsModalOpen: setIsOpen,
                }}
            >
                {children}
            </NotificationContext.Provider>
        </>
    );
};
