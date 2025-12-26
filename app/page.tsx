'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Search, ChevronDown, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState('Duhail, Doha');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for smooth scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'transparent'
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '16px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          backgroundColor: 'transparent'
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <h1 style={{
              fontSize: '28px',
              fontFamily: 'serif',
              lineHeight: '1.1',
              color: '#FDB022',
              fontWeight: 500,
              margin: 0,
              cursor: 'pointer'
            }}>
              Go<span style={{ fontSize: '18px', verticalAlign: 'top' }}>✨</span>n<br />
              <span style={{ fontSize: '24px' }}>Glow</span>
            </h1>
          </Link>

          {/* Middle Section - Pill Nav + Auth */}
          <div className="hidden lg:flex" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}>
            {/* Pill-shaped Navigation Container - Always visible */}
            <div style={{
              backdropFilter: 'blur(15px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              padding: '10px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'opacity 0.3s ease'
            }}>
              <Link href="/salons" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
                SALONS
              </Link>
              <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
              <Link href="/offers" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
                OFFERS
              </Link>
              <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
              <Link href="/partner" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
                BE A PARTNER
              </Link>
              <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
              <Link href="/contact-us" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
                CONTACT US
              </Link>
            </div>

            {/* Sign in */}
            <Link href="/signin" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Sign in
            </Link>

            {/* Sign up Button */}
            <Link
              href="/signup"
              style={{
                padding: '10px 28px',
                backgroundColor: '#FDB022',
                color: '#FFFFFF',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Sign up
            </Link>
          </div>

          {/* Language Selector - Right End */}
          {/* Language Toggle - Desktop and Mobile */}
          <div style={{
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 500,
            flexShrink: 0,
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            <span style={{ color: '#FFFFFF', cursor: 'pointer' }}>EN</span>
            <span style={{ color: '#666666' }}>/</span>
            <span style={{ color: '#999999', cursor: 'pointer' }}>AR</span>
          </div>


        </div>

      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(/hero-model-portrait.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 60px'
        }}>
          {/* Glassmorphic Search Bar Container */}
          <div style={{
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            {/* Main Search Pill */}
            <div style={{
              flex: 1,
              backdropFilter: 'blur(15px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              padding: '4px 4px 4px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              height: '50px'
            }}>
              {/* Location */}
              <div className="flex items-center gap-2" style={{
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}>
                <MapPin size={20} style={{ color: '#FDB022' }} />
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500 }}>{selectedLocation}</span>
                <ChevronDown size={14} style={{ color: '#FFFFFF', opacity: 0.7 }} />
              </div>

              {/* Separator */}
              <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for salons or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontSize: '15px'
                }}
              />

              {/* Search Icon Button - Inside pill */}
              <button style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FDB022',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}>
                <Search size={20} style={{ color: '#FFFFFF' }} />
              </button>
            </div>

            {/* Advanced Search Button - Outside */}
            <button style={{
              padding: '0 32px',
              height: '50px',
              backgroundColor: '#FDB022',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(253, 176, 34, 0.3)'
            }}>
              Advanced Search
            </button>
          </div>
        </div>

        {/* Which would you prefer? Section */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '24px 24px 24px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 60px' }}>
            {/* Desktop Layout: Title Left, Cards Right */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px'
            }}>
              {/* Title */}
              <h2 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                flexShrink: 0,
                lineHeight: '1.2',
                whiteSpace: 'nowrap'
              }}>
                Which would you prefer?
              </h2>

              {/* Cards Container */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                maxWidth: '800px',
                flex: 1
              }}>
                {/* At Salon Card */}
                <div style={{
                  position: 'relative',
                  backdropFilter: 'blur(15px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden'
                }}>
                  {/* Background Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/at-salon.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '12px' }}>
                      At Salon
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', fontSize: '14px' }}>
                      Experience professional beauty services in our luxurious salon environment
                    </p>
                    <Link href="/salons" style={{
                      color: '#FDB022',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      View <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* At Home Card */}
                <div style={{
                  position: 'relative',
                  backdropFilter: 'blur(15px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden'
                }}>
                  {/* Background Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/at-home.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '12px' }}>
                      At Home
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', fontSize: '14px' }}>
                      Enjoy premium salon services in the comfort of your own home
                    </p>
                    <Link href="/at-home" style={{
                      color: '#FDB022',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      View <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are You Looking For? Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 60px'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#000000',
              borderBottom: '3px solid #FDB022',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              What Are You Looking For?
            </h2>
            <button className="btn-interaction" style={{
              padding: '10px 28px',
              backgroundColor: '#FDB022',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              View All
            </button>
          </div>

          {/* Service Categories */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '32px',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Haircut', image: '/service-haircut.png' },
              { name: 'Hair Colour', image: '/service-hair-colour.png' },
              { name: 'Hair Spa', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop' },
              { name: 'Facial', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop' },
              { name: 'Nails', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop' }
            ].map((service, index) => (
              <div key={index} className="reveal-on-scroll" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transitionDelay: `${index * 100}ms`
              }}>
                <div className="img-zoom-container" style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? '#FF6B6B' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#000000' }}>
                  {service.name}
                </span>
              </div>
            ))}
          </div>

          {/* Limited Time Offers Section */}
          <div style={{ marginTop: '60px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              height: '500px'
            }}>
              {/* Offer Card 1 - Top Left */}
              <div className="reveal-on-scroll hover-card" style={{
                position: 'relative',
                backgroundImage: 'url(https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=400&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                padding: '32px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Dark Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 0
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* LIMITED TIME OFFER Stamp */}
                  <div style={{
                    display: 'inline-block',
                    border: '3px solid #FF0000',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    marginBottom: '16px',
                    transform: 'rotate(-5deg)'
                  }}>
                    <span style={{
                      color: '#FF0000',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}>LIMITED</span><br />
                    <span style={{
                      color: '#FF0000',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}>TIME OFFER</span>
                  </div>

                  <p style={{ color: '#FFFFFF', fontSize: '13px', marginBottom: '16px', maxWidth: '80%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>

                  <button className="btn-interaction" style={{
                    padding: '10px 24px',
                    backgroundColor: '#FDB022',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    Book Appointment
                  </button>
                </div>

                {/* T&C Apply */}
                <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}>
                  <span style={{
                    color: '#FFFFFF',
                    fontSize: '11px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    T&C Apply
                  </span>
                </div>
              </div>

              {/* Offer Card 2 - Right Side (Full Height) */}
              <div className="reveal-on-scroll hover-card" style={{
                position: 'relative',
                backgroundImage: 'url(https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=400&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                padding: '32px',
                overflow: 'hidden',
                gridRow: 'span 2',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Dark Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 0
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* LIMITED TIME OFFER Stamp */}
                  <div style={{
                    display: 'inline-block',
                    border: '3px solid #FF0000',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    marginBottom: '16px',
                    transform: 'rotate(-5deg)'
                  }}>
                    <span style={{
                      color: '#FF0000',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}>LIMITED</span><br />
                    <span style={{
                      color: '#FF0000',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}>TIME OFFER</span>
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '12px', fontWeight: 'bold' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  </h3>

                  <p style={{ color: '#FFFFFF', fontSize: '13px', marginBottom: '16px', maxWidth: '80%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p>

                  <button className="btn-interaction" style={{
                    padding: '10px 24px',
                    backgroundColor: '#FDB022',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    Book Appointment
                  </button>
                </div>

                {/* T&C Apply */}
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', zIndex: 1 }}>
                  <span style={{
                    color: '#FFFFFF',
                    fontSize: '11px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    T&C Apply
                  </span>
                </div>
              </div>

              {/* Offer Card 3 - Bottom Left */}
              <div className="reveal-on-scroll hover-card" style={{
                position: 'relative',
                backgroundImage: 'url(https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=400&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                padding: '32px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Dark Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 0
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* LIMITED TIME OFFER Stamp */}
                  <div style={{
                    display: 'inline-block',
                    border: '3px solid #FF0000',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    marginBottom: '16px',
                    transform: 'rotate(-5deg)'
                  }}>
                    <span style={{
                      color: '#FF0000',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}>LIMITED</span><br />
                    <span style={{
                      color: '#FF0000',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}>TIME OFFER</span>
                  </div>

                  <p style={{ color: '#FFFFFF', fontSize: '13px', marginBottom: '16px', maxWidth: '80%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>

                  <button className="btn-interaction" style={{
                    padding: '10px 24px',
                    backgroundColor: '#FDB022',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    Book Appointment
                  </button>
                </div>

                {/* T&C Apply */}
                <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}>
                  <span style={{
                    color: '#FFFFFF',
                    fontSize: '11px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    T&C Apply
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed Section */}
      <section style={{
        backgroundColor: '#EEEEEE',
        padding: '40px 60px 60px'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#000000',
            borderBottom: '3px solid #FDB022',
            paddingBottom: '8px',
            display: 'inline-block',
            marginBottom: '40px'
          }}>
            Recently Viewed
          </h2>

          {/* Salon Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { discount: '20%', rating: '4.5', distance: '9.3 km', status: '11:00 AM' },
              { discount: '30%', rating: '4.4', distance: '9.3 km', status: '11:00 AM' },
              { discount: '20%', rating: '4.5', distance: '9.3 km', status: '11:00 AM' },
              { discount: '20%', rating: '4.5', distance: '9.3 km', status: '11:00 AM' }
            ].map((salon, index) => (
              <div key={index} className="reveal-on-scroll hover-card" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transitionDelay: `${index * 100}ms`
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Salon Image */}
                <div style={{
                  position: 'relative',
                  height: '160px',
                  backgroundImage: index === 1 ? 'url(/at-salon.png)' : `url(https://images.unsplash.com/photo-${['1560066984-138dadb4c035', '1521590832817-4f0144746d9b', '1633681926022-84c23e8cb2d6', '1562322140-8baeececf3df'][index]}?w=400&h=300&fit=crop)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {/* Discount Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#FDB022',
                    color: '#FFFFFF',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ fontSize: '16px' }}>⚡</span>
                    Flat {salon.discount} OFF
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '16px' }}>
                  {/* Title and Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#000000',
                      margin: 0,
                      flex: 1
                    }}>
                      Lorem ipsum is dolor...
                    </h3>
                    <div style={{
                      backgroundColor: '#22C55E',
                      color: '#FFFFFF',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0,
                      marginLeft: '8px'
                    }}>
                      ★ {salon.rating}
                    </div>
                  </div>

                  {/* Location and Type */}
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '8px'
                  }}>
                    • At Home • At Salon
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    Duhail, Doha • {salon.distance}
                  </div>

                  {/* Service Tags */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      Hair Salon
                    </span>
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      {index === 2 ? 'Hair Color' : 'Hair Salon'}
                    </span>
                  </div>

                  {/* Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#EF4444'
                  }}>
                    <span>🕐</span>
                    <span style={{ fontWeight: 500 }}>Closed</span> opens at {salon.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 60px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 0
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Download the<br />Glow & Go app
          </h2>

          <p style={{
            fontSize: '15px',
            color: '#FFFFFF',
            marginBottom: '32px',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          </p>

          {/* App Store Buttons */}
          <div>
            <div style={{
              fontSize: '13px',
              color: '#FFFFFF',
              marginBottom: '12px',
              fontWeight: 500
            }}>
              Available On
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {/* Play Store */}
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}>
                <div style={{
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  ▶
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#666' }}>GET IT ON</div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>Google Play</div>
                </div>
              </div>

              {/* App Store */}
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}>
                <div style={{
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center'
                }}>

                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#666' }}>Download on the</div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 60px 60px'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#000000',
            borderBottom: '3px solid #FDB022',
            paddingBottom: '8px',
            display: 'inline-block',
            marginBottom: '40px'
          }}>
            Popular Brands
          </h2>

          {/* Salon Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { discount: '20%', rating: '4.5', distance: '9.3 km', status: '11:00 AM' },
              { discount: null, rating: '4.4', distance: '9.3 km', status: '11:00 AM' },
              { discount: null, rating: '4.5', distance: '9.3 km', status: '11:00 AM' },
              { discount: null, rating: '4.5', distance: '9.3 km', status: '11:00 AM' }
            ].map((salon, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Salon Image */}
                <div style={{
                  position: 'relative',
                  height: '160px',
                  backgroundImage: index === 1 ? 'url(/at-home.png)' : `url(https://images.unsplash.com/photo-${['1560066984-138dadb4c035', '1521590832817-4f0144746d9b', '1633681926022-84c23e8cb2d6', '1562322140-8baeececf3df'][index]}?w=400&h=300&fit=crop)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {/* Discount Badge */}
                  {salon.discount && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: '#FDB022',
                      color: '#FFFFFF',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ fontSize: '16px' }}>⚡</span>
                      Flat {salon.discount} OFF
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '16px' }}>
                  {/* Title and Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#000000',
                      margin: 0,
                      flex: 1
                    }}>
                      Lorem ipsum is dolor...
                    </h3>
                    <div style={{
                      backgroundColor: '#22C55E',
                      color: '#FFFFFF',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0,
                      marginLeft: '8px'
                    }}>
                      ★ {salon.rating}
                    </div>
                  </div>

                  {/* Location and Type */}
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '8px'
                  }}>
                    • At Home • At Salon
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    Duhail, Doha • {salon.distance}
                  </div>

                  {/* Service Tags */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      Hair Salon
                    </span>
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      Hair Salon
                    </span>
                  </div>

                  {/* Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#EF4444'
                  }}>
                    <span>🕐</span>
                    <span style={{ fontWeight: 500 }}>Closed</span> opens at {salon.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Your Salons in Qatar Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 60px 80px'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          {/* Header with Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#000000',
              borderBottom: '3px solid #FDB022',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Find Your Salons in Qatar
            </h2>

            {/* Male/Female Toggle */}
            <div style={{
              display: 'flex',
              backgroundColor: '#F3F4F6',
              borderRadius: '30px',
              padding: '4px',
              gap: '4px'
            }}>
              <button style={{
                padding: '8px 24px',
                backgroundColor: '#FDB022',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Male
              </button>
              <button style={{
                padding: '8px 24px',
                backgroundColor: 'transparent',
                color: '#666',
                border: 'none',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Female
              </button>
            </div>
          </div>

          {/* Salon Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { discount: '20%', rating: '4.5', distance: '9.3 km', status: '11:00 AM' },
              { discount: null, rating: '4.4', distance: '9.3 km', status: '11:00 AM' },
              { discount: null, rating: '4.5', distance: '9.3 km', status: '11:00 AM' },
              { discount: null, rating: '4.5', distance: '9.3 km', status: '11:00 AM' }
            ].map((salon, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Salon Image */}
                <div style={{
                  position: 'relative',
                  height: '160px',
                  backgroundImage: index === 1 ? 'url(/at-salon.png)' : `url(https://images.unsplash.com/photo-${['1560066984-138dadb4c035', '1521590832817-4f0144746d9b', '1633681926022-84c23e8cb2d6', '1562322140-8baeececf3df'][index]}?w=400&h=300&fit=crop)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {/* Discount Badge */}
                  {salon.discount && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: '#FDB022',
                      color: '#FFFFFF',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ fontSize: '16px' }}>⚡</span>
                      Flat {salon.discount} OFF
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '16px' }}>
                  {/* Title and Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#000000',
                      margin: 0,
                      flex: 1
                    }}>
                      Lorem ipsum is dolor...
                    </h3>
                    <div style={{
                      backgroundColor: '#22C55E',
                      color: '#FFFFFF',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0,
                      marginLeft: '8px'
                    }}>
                      ★ {salon.rating}
                    </div>
                  </div>

                  {/* Location and Type */}
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '8px'
                  }}>
                    • At Home • At Salon
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    Duhail, Doha • {salon.distance}
                  </div>

                  {/* Service Tags */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      Hair Salon
                    </span>
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      Hair Salon
                    </span>
                  </div>

                  {/* Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#EF4444'
                  }}>
                    <span>🕐</span>
                    <span style={{ fontWeight: 500 }}>Closed</span> opens at {salon.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '48px'
          }}>
            <button style={{
              padding: '12px 40px',
              backgroundColor: '#FDB022',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(253, 176, 34, 0.3)'
            }}>
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2C3E50',
        color: '#FFFFFF',
        padding: '60px 60px 0'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {/* Logo and Description */}
            <div>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h1 style={{
                  fontSize: '32px',
                  fontFamily: 'serif',
                  lineHeight: '1.1',
                  color: '#7DD3C0',
                  fontWeight: 500,
                  margin: '0 0 20px 0',
                  cursor: 'pointer'
                }}>
                  Go<span style={{ fontSize: '22px', verticalAlign: 'top' }}>✨</span>n<br />
                  <span style={{ fontSize: '28px' }}>Glow</span>
                </h1>
              </Link>
              <p style={{
                fontSize: '13px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '24px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              {/* Social Media Icons */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <span>f</span>
                </a>
                <a href="#" style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <span>𝕏</span>
                </a>
                <a href="#" style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <span>in</span>
                </a>
                <a href="#" style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <span>📷</span>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#FFFFFF'
              }}>
                Navigation
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum5', 'Lorem Ipsum'].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '13px'
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column 1 */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#FFFFFF'
              }}>
                Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '13px'
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column 2 */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#FFFFFF'
              }}>
                Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '13px'
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#FFFFFF'
              }}>
                Contact Us
              </h3>
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0
                }}>
                  Address: Building No:44, Zone 81, Street 255, 5th Floor, Lorem Ipsum, Doha - Qatar
                </p>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0
                }}>
                  Phone Number: +974 3334 5678, +974 8765 4321
                </p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0
                }}>
                  Email: salon1@gmail.com
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: '#FFFFFF'
                }}>
                  Subscribe Our Newsletter
                </h4>
                <div style={{
                  display: 'flex',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '30px',
                  overflow: 'hidden'
                }}>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    style={{
                      flex: 1,
                      padding: '10px 20px',
                      border: 'none',
                      outline: 'none',
                      fontSize: '13px',
                      backgroundColor: '#FFFFFF',
                      color: '#000000'
                    }}
                  />
                  <button style={{
                    padding: '10px 28px',
                    backgroundColor: '#7DD3C0',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '24px 0',
          marginTop: '20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0
            }}>
              Copyright © 2024 Go N Glow. All Rights Reserved. Developed by Ginger Technologies
            </p>
            <div style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
            }}>
              <a href="#" style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none'
              }}>
                Terms & Conditions
              </a>
              <a href="#" style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none'
              }}>
                Privacy Policy
              </a>
              <a href="#" style={{
                fontSize: '12px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 600
              }}>
                BACK TO TOP
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
