import { useState, useEffect, useCallback } from 'react';
import type { User, UserFormData, UserRole, UserStatus } from '../types/user';
import { userService } from '../services/userService';

interface UseUsersResult {
  users: User[];
  loading: boolean;
  error: string | null;
  totalUsers: number;
  refetch: () => Promise<void>;
}

interface UseUsersParams {
  page?: number;
  limit?: number;
  searchQuery?: string;
  roleFilter?: UserRole | '';
  statusFilter?: UserStatus | '';
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export const useUsers = (params: UseUsersParams = {}): UseUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalUsers, setTotalUsers] = useState<number>(0);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { users: fetchedUsers } = await userService.getUsers({
        _page: params.page,
        _limit: params.limit,
        q: params.searchQuery,
        role: params.roleFilter,
        status: params.statusFilter,
        _sort: params.sortBy,
        _order: params.sortOrder,
      });

      // Apply client-side filtering if needed (for search, role, status)
      let filteredUsers = fetchedUsers;

      if (params.searchQuery) {
        const query = params.searchQuery.toLowerCase();
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
      }

      if (params.roleFilter) {
        filteredUsers = filteredUsers.filter((user) => user.role === params.roleFilter);
      }

      if (params.statusFilter) {
        filteredUsers = filteredUsers.filter((user) => user.status === params.statusFilter);
      }

      // Apply client-side sorting if needed
      if (params.sortBy) {
        filteredUsers = [...filteredUsers].sort((a, b) => {
          const aValue = a[params.sortBy as keyof User];
          const bValue = b[params.sortBy as keyof User];

          if (aValue < bValue) return params.sortOrder === 'asc' ? -1 : 1;
          if (aValue > bValue) return params.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }

      setUsers(filteredUsers);
      setTotalUsers(filteredUsers.length);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [
    params.page,
    params.limit,
    params.searchQuery,
    params.roleFilter,
    params.statusFilter,
    params.sortBy,
    params.sortOrder,
  ]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    totalUsers,
    refetch: fetchUsers,
  };
};

// Hook for managing a single user
export const useUser = (id: string | undefined) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedUser = await userService.getUserById(id);
        setUser(fetchedUser);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
};

// Hook for user mutations (create, update, delete)
export const useUserMutations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (userData: UserFormData): Promise<User | null> => {
    setLoading(true);
    setError(null);

    try {
      const newUser = await userService.createUser(userData);
      return newUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: string, userData: UserFormData): Promise<User | null> => {
    setLoading(true);
    setError(null);

    try {
      const updatedUser = await userService.updateUser(id, userData);
      return updatedUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await userService.deleteUser(id);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    createUser,
    updateUser,
    deleteUser,
    loading,
    error,
  };
};
