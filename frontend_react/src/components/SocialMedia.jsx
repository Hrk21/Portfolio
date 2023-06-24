import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF ,FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/himanshu-rathore-629705206/' target='blank'><FaLinkedin/></a>
    </div>
    <div>
      <a href='https://www.facebook.com/people/Himanshu-Rathore/pfbid0mSkPzBddFqtaMyjLVSfcRSGkKGU8wz3kJ4TmWKk1dCCh2aTCoKcL6ye6A3eEMz88l/' target='blanck'><FaFacebookF></FaFacebookF></a>
    </div>
    <div>
      <a href='https://www.instagram.com/hhimanshu.r/' target='blank'><BsInstagram/></a>
    </div>
  </div>
);

export default SocialMedia;