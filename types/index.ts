export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'user' | 'admin';
    location?: {
        city: string;
    };
}

export interface Salon {
    _id: string;
    name: string;
    description: string;
    location: {
        address: string;
        city: string;
    };
    images: string[];
    rating: number;
    reviewCount: number;
    services?: Service[];
}

export interface Service {
    _id: string;
    salonId: string;
    name: string;
    description: string;
    category: string;
    price: number;
    duration: number;
    image: string;
}

export interface Booking {
    _id: string;
    userId: string;
    salonId: Salon;
    serviceIds: Service[];
    date: string;
    timeSlot: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    totalPrice: number;
    notes?: string;
    createdAt: string;
}
