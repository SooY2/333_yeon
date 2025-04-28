import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from './styles/globalStyles';
import { theme } from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
