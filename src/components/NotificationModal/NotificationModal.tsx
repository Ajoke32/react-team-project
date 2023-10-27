import { createPortal } from 'react-dom';
import { CSSProperties, useContext, useEffect, useRef } from 'react';
import { NotificationContext } from '@/components/NotificationsContext/NotificationContext';
import { NotificationMessage } from '@/enums';

const MODAL: CSSProperties = {
    position: 'absolute',
    right: '50px',
    top: '50px',
    zIndex: 1000,
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    padding: '25px 50px',
    backgroundColor: '#fff',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
};
const appear = [{ transform: 'scale(0)' }, { transform: 'scale(1)' }];

const timing = {
    duration: 200,
};
const NotificationModal = () => {
    const { isModalOpen, setIsModalOpen, message } =
        useContext(NotificationContext);
    const { type } = useContext(NotificationContext);

    if (!isModalOpen) return null;
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const tm = setTimeout(() => {
            setIsModalOpen(false);
            modalRef.current!.style.display = 'none';
        }, 2000);

        return () => clearTimeout(tm);
    }, []);
    useEffect(() => {
        if (modalRef.current !== null) {
            modalRef.current.style.display = 'flex';
            modalRef.current.animate(appear, timing);
        }
    }, [modalRef.current]);

    const bk =
        type === NotificationMessage.ERROR
            ? 'red'
            : type === NotificationMessage.INFO
            ? 'blue'
            : type === NotificationMessage.SUCCESS
            ? '#70e000'
            : '';

    return createPortal(
        <div
            ref={modalRef}
            style={{ ...MODAL, display: 'none' }}
            className="flex"
        >
            <div className="flex flex-col gap-3 items-center">
                <span>{message}</span>
            </div>
            <div
                style={{
                    position: 'absolute',
                    height: '100%',
                    right: 0,
                    top: 0,
                    width: '5px',
                    backgroundColor: bk,
                }}
            ></div>
        </div>,
        document.getElementById('portal')!,
    );
};

export default NotificationModal;
