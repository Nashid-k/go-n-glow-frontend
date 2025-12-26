'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import apiClient from '@/lib/api-client';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data } = await apiClient.post('/auth/forgot-password', { email });
            // Redirect to OTP page with email
            setTimeout(() => {
                router.push(`/otp?email=${encodeURIComponent(email)}`);
            }, 500);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#F3F4F6',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: 'calc(100vh - 10px)',
                backgroundColor: '#FFFFFF',
                borderRadius: '0',
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                {/* Left Side - Portrait Image */}
                <div style={{
                    width: '50%',
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img
                        src="/forgot-password-model-gradient.jpg"
                        alt="Salon model"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </div>

                {/* Right Side - Form */}
                <div style={{
                    width: '50%',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FAFAFA',
                    overflowY: 'auto',
                    position: 'relative'
                }}>
                    {/* Back Button - Positioned near image edge */}
                    <button
                        onClick={() => router.back()}
                        style={{
                            position: 'absolute',
                            top: '30px',
                            left: '30px',
                            background: 'none',
                            border: 'none',
                            color: '#000000',
                            cursor: 'pointer',
                            padding: 0,
                            zIndex: 10
                        }}
                    >
                        <ArrowLeft style={{ width: '22px', height: '22px' }} />
                    </button>

                    <div style={{
                        minHeight: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px'
                    }}>
                        <div style={{
                            width: '100%',
                            maxWidth: '400px'
                        }}>

                            {/* Logo */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '20px'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 style={{
                                        fontSize: '42px',
                                        fontFamily: 'serif',
                                        lineHeight: '1.1',
                                        color: '#FDB022',
                                        fontWeight: 500,
                                        margin: 0
                                    }}>
                                        Go<span style={{ fontSize: '26px', verticalAlign: 'top' }}>✨</span>n
                                        <br />
                                        Glow
                                    </h1>
                                </div>
                            </div>

                            {/* Header */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '30px'
                            }}>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    marginBottom: '8px',
                                    margin: '0 0 8px 0'
                                }}>
                                    Forgot Password
                                </h2>
                                <p style={{
                                    fontSize: '13px',
                                    color: '#878787',
                                    margin: 0,
                                    lineHeight: '1.5'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div style={{
                                    marginBottom: '16px',
                                    padding: '12px',
                                    backgroundColor: '#FEF2F2',
                                    border: '1px solid #FECACA',
                                    borderRadius: '12px',
                                    color: '#DC2626',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }}>
                                    {error}
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSendOTP} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        padding: '0 16px',
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        color: '#000000',
                                        outline: 'none'
                                    }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#FDB022'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
                                />

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        style={{
                                            minWidth: '140px',
                                            padding: '0 40px',
                                            height: '44px',
                                            backgroundColor: loading ? '#FDB022AA' : '#FDB022',
                                            color: '#FFFFFF',
                                            fontWeight: '600',
                                            fontSize: '15px',
                                            border: 'none',
                                            borderRadius: '22px',
                                            cursor: loading ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {loading ? 'Sending...' : 'Send OTP'}
                                    </button>
                                </div>
                            </form>

                            <div style={{
                                textAlign: 'center',
                                marginTop: '20px',
                                fontSize: '12px',
                                color: '#6B7280'
                            }}>
                                <Link href="/signup" style={{ color: '#6B7280', textDecoration: 'none' }}>
                                    Don't have an account?
                                </Link>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '30px 0',
                                fontSize: '12px',
                                color: '#9CA3AF'
                            }}>
                                <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }}></div>
                                <span style={{ padding: '0 10px' }}>or</span>
                                <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }}></div>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '20px',
                                marginBottom: '30px'
                            }}>
                                {/* Apple */}
                                <button style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFFFFF',
                                    border: 'none',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                </button>

                                {/* Google */}
                                <button style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFFFFF',
                                    border: 'none',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </button>

                                {/* Meta */}
                                <button style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFFFFF',
                                    border: 'none',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="#0866FF">
                                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
                                    </svg>
                                </button>
                            </div>

                            <div style={{
                                textAlign: 'center',
                            }}>
                                <Link
                                    href="/"
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: '#FDB022',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Continue Guest User &gt;&gt;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
