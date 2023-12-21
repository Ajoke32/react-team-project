import React, { useContext, ReactNode } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { AuthContext } from '@/components/AuthContext/AuthContext';

interface PrivateRouteProps extends Omit<RouteProps, 'render'> {
    component: React.ComponentType<any>;
    children?: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const authContext = useContext(AuthContext);

    if (!Component || !authContext || authContext.isAuthenticated === undefined) return null;

    return (
        <Route
            {...rest}
            render={(props) =>
                authContext.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;