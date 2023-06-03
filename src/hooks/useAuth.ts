import { localStorage } from '../utils';

export const useAuth = () => {
  const isAuthourized = localStorage.getWithExpiration('access_token');

  return isAuthourized;
};
