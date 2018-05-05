import { AppUserAuth } from './app-user-auth';

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: 'AlexP',
    bearerToken: 'daf3q03fjaofa',
    isAuthenticated: true,
    canAccessProduct: true,
    canAddProduct: true,
    canEditProduct: true,
    canAccessCategories: true,
    canAddCategory: false
  },
  {
    userName: 'StefanP',
    bearerToken: 'd32323fjaofa',
    isAuthenticated: true,
    canAccessProduct: false,
    canAddProduct: false,
    canEditProduct: false,
    canAccessCategories: true,
    canAddCategory: true
  }
];
