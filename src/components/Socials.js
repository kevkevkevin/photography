import React from 'react';
//import icon
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImBehance,
  ImYoutube,
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4 cursor-pointer'>
      <li><a href="https://facebook.com/soongaw" target='blank'><ImFacebook /></a></li>
      <li><a href="https://twitter.com/kevzzkie" target='blank'><ImTwitter /></a></li>
      <li><a href="https://www.instagram.com/kevin.dev.design/" target='blank'><ImInstagram /></a></li>
      <li><a href="https://www.behance.net/kevdevdesign" target='blank'><ImBehance /></a></li>
      <li><a href="https://www.youtube.com/@kevinnisay5157" target='blank'><ImYoutube /></a></li>
    </ul>
  </div>;
};

export default Socials;
