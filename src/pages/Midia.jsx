import style from "./Midia.module.css";

export default function Midia() {
  return (
    <section className={style.container}>
      <div className={style.conteudo}>
        <div className={style.texto}>
          <h1>Instagram - Fique por Dentro</h1>
          <a href="/"> @fazendabenfica</a>
        </div>
        <div className={style.instagram}>
          <iframe
            src="https://snapwidget.com/embed/1008269"
            allowtransparency="true"
            frameborder="0"
            scrolling="yes"
            style={{
              border: "none",
              overflow: "hidden",
              // width: "400px",
              height: "510px",
            }}
            className={style.container_instagram}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
