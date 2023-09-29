import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Home } from './pages';
import MainLayout from './layout/mainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        ;
        {routes.map(({ path, element: Component }) => {
          <Route
            path={path}
            element={
              <MainLayout>
                <Component />
              </MainLayout>
            }
          />;
        })}
      </Routes>
    </>
  );
}

export default App;
