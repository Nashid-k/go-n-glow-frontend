'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import apiClient from '@/lib/api-client';

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

interface SignupData {
    name: string;
    email: string;
    password: string;
    phone: string;
    location?: {
        city: string;
    };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored auth on mount
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await apiClient.post('/auth/login', { email, password });
            const { token: authToken, ...userData } = data.data;

            localStorage.setItem('token', authToken);
            localStorage.setItem('user', JSON.stringify(userData));

            setToken(authToken);
            setUser(userData);
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    };

    const signup = async (signupData: SignupData) => {
        try {
            const { data } = await apiClient.post('/auth/signup', signupData);
            const { token: authToken, ...userData } = data.data;

            localStorage.setItem('token', authToken);
            localStorage.setItem('user', JSON.stringify(userData));

            setToken(authToken);
            setUser(userData);
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Signup failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
