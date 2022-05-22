import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer2() {
  return (
    <div><MDBFooter bgColor='light' className='text-center text-lg-left'>
    <div className='text-center p-3' style={{ backgroundColor: 'white' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href='https://mdbootstrap.com/'>
        Mysite.com
      </a>
    </div>
  </MDBFooter>
  </div>
  )
}

export default Footer2 ; 