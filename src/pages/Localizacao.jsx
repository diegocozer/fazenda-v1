import style from "./Localizacao.module.css";
import { GoLocation } from "react-icons/go";

export default function Localizacao() {
  return (
    <section className={style.container}>
      <div className={style.div_conteudo}>
        <div className={style.div}>
          <h1>Localização Privilegiada</h1>
          <p>A FAZENDA MAIS BEM LOCALIZADA DE BOM RETIRO </p>
        </div>
        <div className={style.div}>
          <i>
            <GoLocation />
          </i>
          <a
            href="https://www.google.com.br/maps/place/Fazenda+Benfica/@-27.7366875,-49.6653125,15z/data=!4m5!3m4!1s0x0:0xa13e15431da62d79!8m2!3d-27.7366875!4d-49.6653125"
            target="_blank"
            rel="noreferrer"
          >
            Clique aqui para acessar a Localização
          </a>
        </div>
      </div>
    </section>
  );
}
