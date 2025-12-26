'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

function OtpPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length < 6) {
            return;
        }

        setLoading(true);
        // Simulate verification
        setTimeout(() => {
            setLoading(false);
            router.push('/change-password');
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
                {/* Left Side - Portrait Image */}
                <div style={{
                    width: '50%',
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img
                        src="/otp-model-gradient.jpg"
                        alt="Salon model"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </div>

                {/* Right Side - OTP Form */}
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
                            maxWidth: '430px'
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
                                marginBottom: '40px'
                            }}>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    marginBottom: '8px',
                                    margin: '0 0 8px 0'
                                }}>
                                    Enter OTP
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

                            {/* Form */}
                            <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => { inputRefs.current[index] = el; }}
                                            type="text"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                border: '1px solid #D1D5DB',
                                                borderRadius: '8px',
                                                textAlign: 'center',
                                                fontSize: '20px',
                                                fontWeight: '600',
                                                color: '#000000',
                                                backgroundColor: '#FFFFFF',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.currentTarget.style.borderColor = '#FDB022'}
                                            onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                                        />
                                    ))}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {loading ? 'Verifying...' : 'Confirm'}
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

export default function OtpPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OtpPageContent />
        </Suspense>
    );
}
