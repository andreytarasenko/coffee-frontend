import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './theme/mainTheme';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <RecoilRoot>
            <MainLayout />
          </RecoilRoot>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
