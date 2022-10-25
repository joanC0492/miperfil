import { Layout } from "../Layout";
import { LayoutTitle } from "../Layout/LayoutTitle";
import { Rrss } from "../Rrss";
import scss from "@/scss/components/Contact.module.scss";

export const Contact = () => {
  return (
    <Layout id="contact" layoutTitle={<LayoutTitle name="CONTACTO" />}>
      <div className="row">
        <div className="col-12 text-center">
          <p className={scss.ContactSubtitle}>Joan Cochachi</p>
          <p className={scss.ContactTxt}>Frontend Developer</p>
          <p className={scss.ContactTxt}>
            Estoy disponible para el trabajo independiente. Conéctese conmigo a
            través de los siguientes medios.
          </p>
          <ul className={scss.ContactList}>
            <li className={scss.ContactListItem}>
              Celular :
              <a className={scss.ContactListLink} href="tel:51900556665"> +51 900556665
              </a>
            </li>
            <li className={scss.ContactListItem}>
              Correo:
              <a
                className={scss.ContactListLink}
                href="mailto:joan0492@gmail.com"> joan0492@gmail.com
              </a>
            </li>
          </ul>
          <div className={scss.ContactSocialParent}>
            <div className={scss.ContactSocialLinks}>
              <Rrss />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
