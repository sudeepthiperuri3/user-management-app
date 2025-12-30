import type { User, UserFormData } from '../types/user';

const API_URL = 'http://localhost:3001';

export const userService = {
  // Get all users with optional query parameters
  async getUsers(params?: {
    _page?: number;
    _limit?: number;
    q?: string;
    role?: string;
    status?: string;
    _sort?: string;
    _order?: 'asc' | 'desc';
  }): Promise<{ users: User[]; total: number }> {
    const queryParams = new URLSearchParams();
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value.toString());
        }
      });
    }

    const response = await fetch(`${API_URL}/users?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await response.json();
    const total = parseInt(response.headers.get('X-Total-Count') || users.length.toString(), 10);

    return { users, total };
  },

  // Get a single user by ID
  async getUserById(id: string): Promise<User> {
    const response = await fetch(`${API_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  },

  // Create a new user
  async createUser(userData: UserFormData): Promise<User> {
    const newUser = {
      ...userData,
      createdAt: new Date().toISOString(),
    };

    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    return response.json();
  },

  // Update an existing user
  async updateUser(id: string, userData: UserFormData): Promise<User> {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    return response.json();
  },

  // Delete a user
  async deleteUser(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
  },

  // Search users (client-side filtering for demo)
  async searchUsers(query: string): Promise<User[]> {
    const { users } = await this.getUsers();
    const lowercaseQuery = query.toLowerCase();
    
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercaseQuery) ||
        user.email.toLowerCase().includes(lowercaseQuery)
    );
  },
};
