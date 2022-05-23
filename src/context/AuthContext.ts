import { createContext } from 'react';
import { string } from 'yup';

interface AuthContextData {
  name: string;
}

// eslint-disable-next-line prettier/prettier
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export default AuthContext;
