'use client';
import React, { lazy } from 'react';

const LazyDashBoard = lazy(() => import('@/components/Dashboard/Dashboard'));

const DashboardPage = () => {
    return <LazyDashBoard />;
};

export default DashboardPage;
