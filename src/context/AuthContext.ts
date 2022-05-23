import { createContext } from 'react';
import { string } from 'yup';

interface AuthContext {
  name: string;
}

// eslint-disable-next-line prettier/prettier
const authContext = createContext<AuthContext>({} as AuthContext);


export default authContext;
