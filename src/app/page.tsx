'use client';
import React, { useContext, useState } from 'react';
import NotificationModal from '@/components/NotificationModal/NotificationModal';
import {
    NotificationContext,
} from '@/components/NotificationsContext/NotificationContext';
import Topics from '@/components/Containers/Topics';

export default function Home() {
    const { isModalOpen } = useContext(NotificationContext);
    return (
        <>
            <Topics />
            {isModalOpen ? <NotificationModal /> : ''}
        </>
    );
}
