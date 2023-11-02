import React, { createContext, useState } from 'react';
import Navigation from '@/components/Navigation.jsx';

export const ThemeContext = createContext();

const Layout = ({ children }) => {
  return (
  <>
    <Navigation />
    <div className="container m-auto p-4">{children}</div>
  </>
)};

export default Layout;
