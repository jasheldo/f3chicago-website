import Image from 'next/image';

import fb from '../../../public/fb.svg';
import x from '../../../public/twitter-x.svg';
import ig from '../../../public/instagram.svg';

import en from '../../locales/en.json'

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-10 px-4">
      <address>
        &copy; Copyright {new Date().getFullYear()} | {en.region_name} | All Rights
        Reserved | Powered by the PAX
      </address>
      <nav className="flex items-center mx-auto container justify-center space-x-y mb-4">
        <a href={en.region_facebook} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={fb.src}
            alt="Facebook"
            width={35}
            height={35}
            className="my-0 mx-auto mt-5"
          />
        </a>
        <a href={en.region_x} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={x.src}
            alt="X"
            width={28}
            height={28}
            className="my-0 mx-auto mt-5"
          />
        </a>
        <a href={en.region_instagram} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={ig.src}
            alt="Instagram"
            width={35}
            height={35}
            className="my-0 mx-auto mt-5"
          />
        </a>
      </nav>
    </footer >
  );
}
