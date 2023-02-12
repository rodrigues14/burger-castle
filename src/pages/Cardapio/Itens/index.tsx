import Item from './Item'
import cardapio from './itens.json'
import styles from './Itens.module.scss'

export default function Itens() {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <div>
          <Item 
            key={item.id} 
            {...item}
          />
        </div>
      ))}
    </div>
  )
}
