import scss from "@/scss/components/Footer.module.scss";
export const Footer = () => {
  return (
    <footer id="footer" className={scss.Footer}>
      <div className="container">
        <div className={scss.FooterCredits}>
          © {new Date().getFullYear()}. Developed by Joan Cochachi
        </div>
      </div>
    </footer>
  );
};
