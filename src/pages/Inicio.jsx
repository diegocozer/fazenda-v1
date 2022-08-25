import React from "react";
import "antd/dist/antd.min.css";
import { Carousel } from "antd";
import style from "./Inicio.module.css";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const contentStyle = {
  height: "92vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Inicio = () => (
  <section className={style.inicio}>
    <div className={style.wpp}>
      <i>
        <FaWhatsapp />
      </i>
    </div>
    <div className={style.texto}>
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-684686263095021932/original/66a04d6d-1b3a-44a1-8483-d599653400ef.jpeg?im_w=1200"
        alt=""
      />
      <h3>
        <p>Viva uma das melhores</p>
        <p>experiências</p>
      </h3>
      <button>
        {" "}
        Reserve aqui{" "}
        <i
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaArrowRight />
        </i>
      </button>
    </div>
    <Carousel dotPosition="bottom" easing="true" autoplay>
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
      <div>
        <h3 style={contentStyle}>
          <div className={style.conteudo}></div>
        </h3>
      </div>
    </Carousel>
  </section>
);

export default Inicio;
