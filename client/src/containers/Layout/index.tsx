import React, {useState} from 'react';

import Header from '../Header';

 import { Container, TopNavigation, Page } from './styles';

import DrawerCart from '../../components/DrawerCart';

 type IProps = {
    children: React.ReactNode;
  };

const Layout: React.FC<IProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return <Container>
     <TopNavigation>
        <Header setVisible={setVisible}/>
      </TopNavigation>

      <Page>
      {children}
      </Page>

      <DrawerCart onClose={() => setVisible(false)} open={visible}/>
     
     
  </Container>
}

export default Layout;