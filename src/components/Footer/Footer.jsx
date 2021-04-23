import s from './Footer.module.scss';

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.footer__copyright}>
      © 2016-2021 «Need for drive»
    </div>
    <a className={s.footer__phone} href="tel:+74952342244">
      8 (495) 234-22-44
    </a>
  </footer>
);

export default Footer;
