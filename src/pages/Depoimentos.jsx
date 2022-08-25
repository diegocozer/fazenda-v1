import style from "./Depoimentos.module.css";
import "antd/dist/antd.min.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "200px",
  color: "#fff",
  //   lineHeight: "160px",
  background: "#364d79",
  textAlign: "center",
  padding: "20px",
  borderRadius: "10px",
};
export default function Depoimentos() {
  return (
    <section className={style.container}>
      <h1>Depoimentos </h1>
      <div className={style.carrosel}>
        <Carousel dotPosition="bottom" easing="true">
          <div>
            <h3 style={contentStyle}>
              <div className={style.container_depoimentos}>
                <p className={style.titulo}>Pousada Maravilhosa </p>
                <p>
                  Amei minha estadia na pousada! Passei minha lua de mel lá e
                  fiquei encantada! Lugar calmo, vista linda!!!! Decoraram com
                  pétalas de rosas e nos ofereceram champanhe na chegada! Ótimo
                  café da manhã, jantar aconchegante a luz de velas!!!! Amei…
                  Amei!
                </p>
                <p className={style.autor}> - BRUNA</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className={style.conteudo}></div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className={style.conteudo}></div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className={style.conteudo}></div>
            </h3>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
