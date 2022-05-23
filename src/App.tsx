import React from 'react';

import SingnIn from './pages/SignIn/ index';
import SingnUp from './pages/SignUp/ index';
import GlobalStyle from './styles/global';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <SingnIn />
    <GlobalStyle />
  </>
);

export default App;
