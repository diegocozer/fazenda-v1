import style from "./Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.direitos}>
        <p> &copy; Todos os direitos reservados a Fazenda Benfica.</p>
        <div>
          <a href="" className={style.facebook} rel="noreferrer">
            {" "}
            <FaFacebookF />
          </a>
          <a href="" className={style.instagram} rel="noreferrer">
            {" "}
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={style.desenvolvido}>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.diegocozerfarias.com.br"
            rel="noreferrer"
            target="_blank"
          >
            Diego Cozer
          </a>
        </p>
      </div>
    </footer>
  );
}
