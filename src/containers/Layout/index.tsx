import React from 'react';

import Header from '../Header';

 import { Container, TopNavigation, Page } from './styles';

 type IProps = {
    children: React.ReactNode;
  };

const Layout: React.FC<IProps> = ({ children }) => {
  return <Container>
     <TopNavigation>
        <Header />
      </TopNavigation>

      <Page>
      {children}
      </Page>
  </Container>
}

export default Layout;