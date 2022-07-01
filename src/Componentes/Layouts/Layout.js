import React from 'react';

import Inicio from '../Inicio/Inicio';
import Footer from '../Inicio/Footer';

function Layout({children}) {
  return (
    <div>
      <Inicio/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout