import { NotificationMessage } from '@/enums';

export interface NotificationContextType {
    message: string;
    type: NotificationMessage;
    setType: (type: NotificationMessage) => void;
    setMessage: (m: string) => void;
    setIsModalOpen: (val: boolean) => void;
    isModalOpen: boolean;
}
