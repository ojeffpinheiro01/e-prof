import React from 'react';

import ThemeProvider from './src/ui/themes/ThemeProvider'
import Router from './src/ui/router/Router'

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
