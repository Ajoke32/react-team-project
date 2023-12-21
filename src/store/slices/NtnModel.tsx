import { createPortal } from 'react-dom';
import { CSSProperties, useContext, useEffect, useRef, useState } from 'react';
import { NotificationContext } from '@/components/NotificationsContext/NotificationContext';
import { NotificationMessage } from '@/enums';

const MODAL: CSSProperties = {
    position: 'absolute',
    right: '50px',
    top: '80px',
    zIndex: 1000,
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    padding: '25px 50px',
    backgroundColor: '#fff',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
};
const appear = [{ transform: 'scale(0)' }, { transform: 'scale(1)' }];

const timeout = 2000;

const timing = {
    duration: 200,
};

const NotificationModal = () => {
    const { setIsModalOpen, message, type } = useContext(NotificationContext);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tm = setTimeout(() => {
            modalRef.current!.animate(
                [{ transform: 'scale(1)' }, { transform: 'scale(0)' }],
                { duration: 200 },
            );
        }, timeout);

        const tmS = setTimeout(() => {
            setIsModalOpen(false);
            modalRef.current!.style.display = 'none';
        }, timeout + timing.duration);

        return () => {
            clearTimeout(tm);
            clearTimeout(tmS);
        };
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
        document.body,
    );
};

export default NotificationModal;
