import React from 'react'
import Footer from '../Footer/Footer'
import avatar from '../../assets/avatar.svg';
import Underline from "../Underline/Underline";
export default function Home() {
  return (
      <>
          <div className="d-flex flex-column align-items-center mt-5 bgc-secondary">
              <div className="text-center mt-5 py-4">
                  <img className="img-fluid mb-3 avatar" src={avatar} alt="avatar" />
                  <Underline heading='START FRAMEWORK' color='-light'/>
                  <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
          </div>
          <Footer />
      </>
  );
}
