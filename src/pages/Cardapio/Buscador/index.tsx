import React, { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
} 

function Buscador({ busca, setBusca }: Props) {
  const elemento = useMemo(() => <CgSearch size={30} color="#4c4d54" />, []);
  return (
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
        placeholder="Buscar"
      /> 
      {elemento}
    </div>
  );
}

export default memo(Buscador);