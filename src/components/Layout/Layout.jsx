import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import { Container, Header, Links, Footer, Text } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Links to='/' end>
              Home
            </Links>
            <Links to='/movies'>Movie</Links>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>&copy; {new Date().getFullYear()} Movie Search</Text>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
