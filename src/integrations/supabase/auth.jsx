import { useState, useEffect, createContext, useContext } from 'react';
import { supabase, SupabaseProvider } from './index.js';
import { useQueryClient } from '@tanstack/react-query';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const SupabaseAuthContext = createContext();

export const SupabaseAuthProvider = ({ children }) => {
  return (
    <SupabaseProvider>
      <SupabaseAuthProviderInner>{children}</SupabaseAuthProviderInner>
    </SupabaseProvider>
  );
};

export const SupabaseAuthProviderInner = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    const getSession = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      queryClient.invalidateQueries('user');
    });

    getSession();

    return () => {
      authListener.subscription.unsubscribe();
      setLoading(false);
    };
  }, [queryClient]);

  const login = async (identifier, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: identifier,
      password,
    });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    queryClient.invalidateQueries('user');
  };

  return (
    <SupabaseAuthContext.Provider value={{ session, loading, login, logout }}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};

export const useSupabaseAuth = () => {
  return useContext(SupabaseAuthContext);
};

export const SupabaseAuthUI = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    theme="default"
    providers={[]}
  />
);