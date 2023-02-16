import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import burger1 from 'assets/sobre/burger1.png';
import burger2 from 'assets/sobre/burger2.png';

const imagens = [burger1, burger2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa Burger Castle" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Burger Castle oferecemos a vocês, nossos queridos clientes, o hamburger mais saboroso e sofisticado de São Paulo! Prezamos pelos ingredientes tradicionais da culinária americana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar o seu lanche, O burger Castle possui porções de batata e bebidas, que harmonizam perfeitamente com o seu prato!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="Imagem dos burgers" />
          </div>
        ))}
      </div>
    </section>
  );
}