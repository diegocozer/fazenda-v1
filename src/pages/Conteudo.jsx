import style from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <div className={style.convite}>
      <div className={style.conteudo}>
        <div className={style.div_texto}>
          <h1>Venha desfrutar do nascer do sol mais espetacular </h1>
        </div>
        <div className={style.conteudo_foto}>
          <div className={style.foto_convite}></div>
          <div className={style.convite_texto}>
            <h2> Fazenda Benfica </h2>
            <p>
              Localizada em Bom Retiro, na Serra Catarinense, região frequentada
              por casais apaixonados e amantes da natureza, realizamos nosso
              sonho, uma linda pousada em um local maravilhoso e único, temos
              exclusivas acomodações, todas com uma vista privilegiada,wi-fi,
              lareira, oferecemos um saboroso café da manhã, atendimento
              personalizado, em um ambiente intimista, venha desfrutar de
              momentos especiais e inesquecíveis, será um prazer recebe-los!!!
            </p>
            <div>
              <p>Wifi Grátis</p>
              <p>Café da Manhã</p>
              <p>Wifi Grátis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
