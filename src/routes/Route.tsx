import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouterProps {
  // eslint-disable-next-line react/require-default-props
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  // eslint-disable-next-line no-shadow
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(location) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              // state: { from: location }, //NAO DEIXA RETORNAR PAGINAS E DESAPARECE DESHBOAR
            }}
          />
        );
      }}
    />
  );
};

export default Route;
