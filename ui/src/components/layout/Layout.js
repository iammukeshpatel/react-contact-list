import React from 'react'
import Header from '../Header';
import Routers from '../routers/Routers';

export const Layout = () => {
    return (
        <>
          <Header />
          <div>
            <Routers />
          </div>
          {/* <Footer /> */}
        </>
      );
}

export default Layout;

