import { lazy } from 'react';

export const path = '/notes';
export const exact = true;
export const title = 'Notes';
export const component = lazy(() => import('./Notes.jsx'));
