'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function ChangePasswordPage() {
    const router = useRouter();
    const [passwords, setPasswords] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (passwords.newPassword !== passwords.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (passwords.newPassword.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        // Simulate password change
        setTimeout(() => {
            setLoading(false);
            setTimeout(() => router.push('/signin'), 500);
        }, 1000);
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
                {/* Left Side - Dark Salon Image */}
                <div style={{
                    width: '50%',
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img
                        src="/change-password-model-gradient.jpg"
                        alt="Salon model"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </div>

                {/* Right Side - Change Password Form */}
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
                                    Change Password
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
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showNewPassword ? 'text' : 'password'}
                                        placeholder="Enter New Password"
                                        required
                                        minLength={6}
                                        style={{
                                            width: '100%',
                                            height: '48px',
                                            padding: '0 50px 0 18px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            fontSize: '15px',
                                            color: '#000000',
                                            outline: 'none'
                                        }}
                                        value={passwords.newPassword}
                                        onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                                        onFocus={(e) => e.currentTarget.style.borderColor = '#FDB022'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        style={{
                                            position: 'absolute',
                                            right: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            color: '#A0A0A0',
                                            cursor: 'pointer',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {showNewPassword ? <EyeOff style={{ width: '18px', height: '18px' }} /> : <Eye style={{ width: '18px', height: '18px' }} />}
                                    </button>
                                </div>

                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Re-enter Password"
                                        required
                                        minLength={6}
                                        style={{
                                            width: '100%',
                                            height: '48px',
                                            padding: '0 50px 0 18px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            fontSize: '15px',
                                            color: '#000000',
                                            outline: 'none'
                                        }}
                                        value={passwords.confirmPassword}
                                        onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                                        onFocus={(e) => e.currentTarget.style.borderColor = '#FDB022'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        style={{
                                            position: 'absolute',
                                            right: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            color: '#A0A0A0',
                                            cursor: 'pointer',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {showConfirmPassword ? <EyeOff style={{ width: '18px', height: '18px' }} /> : <Eye style={{ width: '18px', height: '18px' }} />}
                                    </button>
                                </div>

                                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
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
                                        {loading ? 'Confirming...' : 'Confirm'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
