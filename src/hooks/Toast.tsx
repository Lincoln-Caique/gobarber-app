import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}



// eslint-disable-next-line prettier/prettier
const Toast = createContext<ToastData>({} as ToastData);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = '12345';
    // const id = uuid();


    const toast = {
      id,
      type,
      title,
      description,
    };
    setMessages(state => [...state, toast]);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id))
  }, []);


  return ( // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </Toast.Provider>);
};

function useToast(): ToastData {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };