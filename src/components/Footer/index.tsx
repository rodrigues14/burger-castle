import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por <a href="https://lucasrodrigues.vercel.app/">Lucas Rodrigues</a></p>
      <Logo />
    </footer>
  );
}
