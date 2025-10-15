import { toast } from '@/hooks/use-toast';

// Backend API base URL - update this when deploying backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-api-gateway-url.amazonaws.com/dev';

interface ApiResponse<T> {
  data: T;
  message?: string;
}

interface ApiError {
  message: string;
  statusCode?: number;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      const errorData: ApiError = isJson 
        ? await response.json()
        : { message: response.statusText, statusCode: response.status };

      throw new Error(errorData.message || 'An error occurred');
    }

    if (isJson) {
      const data: ApiResponse<T> = await response.json();
      return data.data || (data as unknown as T);
    }

    return {} as T;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      return await this.handleResponse<T>(response);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Network error occurred';
      
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });

      throw error;
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const api = new ApiClient(API_BASE_URL);

// Type definitions for API responses
export interface Lead {
  leadId: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  leadSource: string;
  interestedIn: 'consultation' | 'program' | 'general';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  createdAt: string;
}

export interface Appointment {
  appointmentId: string;
  userId: string;
  type: 'consultation' | 'follow_up';
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no_show';
  notes?: string;
  zoomLink?: string;
  googleEventId?: string;
}

export interface AvailabilitySlot {
  start: string;
  end: string;
}

export interface Program {
  programId: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  currentEnrollment: number;
  totalSessions: number;
  sessionDuration: number;
  isActive: boolean;
}

export interface Enrollment {
  enrollmentId: string;
  userId: string;
  programId: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'deposit_paid' | 'installments_active' | 'paid_in_full';
  totalSessions: number;
  sessionsAttended: number;
}
