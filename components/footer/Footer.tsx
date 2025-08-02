import "@/components/footer/footer.scss";
import Input from "../UI/input/input";

type SocialType = {
  id: string;
  url: string;
  name: string;
  icon: string;
}[];

type FooterItemsType = {
  id: string;
  title: string;
  slug: string;
  links: {
    id: string;
    title: string;
    slug: string;
  }[];
}[];
const Footer = async () => {
  const social = await fetch("http://localhost:3001/socialLinks");
  const footerData = await fetch("http://localhost:3001/footerNav");
  const formattedSocial = await social.json();
  const formattedFooterData = await footerData.json();

  const renderSocial = async (social: SocialType) => {
    return social.map(({ id, url, icon, name }) => (
      <li className="footer__nav-social-links-link" key={id}>
        <a href={url}>
          <img src={icon} alt={name} />
        </a>
      </li>
    ));
  };
  const renderFooterData = async (footerData: FooterItemsType) => {
    const items = footerData.map(({ title, slug, links, id }) => {
      return (
        <div className="footer__nav-block" key={id}>
          <h4 className="footer__nav-block-title fw-700 fz-16 f-tradeG">
            {title}
          </h4>
          <ul>
            {links.map(({ id, title, slug }) => {
              return (
                <li key={id}>
                  <a
                    className="footer__nav-block-list-item fw-500 f-montserrat fz-14"
                    href="#"
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    return <div className="footer__nav-blocks">{items}</div>;
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__form">
          <div className="footer__form-block">
            <h2 className="footer__form-title fw-700 f-tradeG fz-44">
              Subscribe Newsletter
            </h2>
            <h2 className="footer__form-subtitle fz-20 f-tradeG fw-b">
              The Travel
            </h2>
            <div className="footer__form-text fw-500 fz-16 f-montserrat">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </div>
            <form>
              <Input
                name="name"
                placeholder="Find Travel"
                style={{ width: "450px" }}
              />
              <button className="button-send footer__form-btn">Button</button>
            </form>
          </div>
          <img
            className="footer__form-img"
            src="/icons/mailbox.svg"
            alt="mailbox"
          />
        </div>
      </div>
      <nav className="footer__nav mt-10">
        <div className="footer__nav-social">
          <img
            src="/icons/logo.svg"
            alt="logo"
            className="footer__block-logo"
          />
          <ul className="footer__nav-social-links">
            {renderSocial(formattedSocial)}
          </ul>
        </div>
        {renderFooterData(formattedFooterData)}
      </nav>
    </footer>
  );
};

export default Footer;
