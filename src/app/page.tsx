'use client';
import React, { useContext, useState } from 'react';
import TopicsList from '@/components/Lists/TopicsList';
import NotificationModal from '@/components/NotificationModal/NotificationModal';
import {
    NotificationContext,
    NotificationContextWrapper,
} from '@/components/NotificationsContext/NotificationContext';

export default function Home() {
    const { isModalOpen } = useContext(NotificationContext);
    return (
        <>
            <TopicsList />
            {isModalOpen ? <NotificationModal /> : ''}
        </>
    );
}
