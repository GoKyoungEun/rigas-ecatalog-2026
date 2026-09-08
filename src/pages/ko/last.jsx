import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "last",
  depth2: "",
};

const contacts = [
  {
    type: "Domestic",
    tel: "+82-42-5031-6962",
    fax: "+82-42-935-8814",
    email: "master@rigas.co.kr",
  },
  {
    type: "Overseas",
    tel: "+82-70-5031-6962",
    fax: "+82-42-935-8814",
    email: "sales@rigas.co.kr",
  },
];

function LinkArrow() {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" aria-hidden="true">
      <path d="m1 1 6.3 6.3L1 13.6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Last() {
  return (
    <CatalogPage pageInfo={pageInfo} id="last" className="last-page">
      <Anime anime="fadeIn" delay={0.1} className="last-logo">
        <Image src="last-logo.svg" alt="RIGAS Research Institute of Gas Analytical Science" />
      </Anime>

      <Anime anime="fadeUp" delay={0.25} className="last-info">
        <h2>We Make Standard</h2>
        <span className="bar" aria-hidden="true" />

        <div className="inner">
          <div className="info-box">
            <p className="last-address">
              (34323) 17, Daedeokdae-ro 1284beon-gil, Daedeok-gu, Daejeon, Korea(South)
            </p>

            <div className="last-contact-list">
              {contacts.map((contact) => (
                <div className="last-contact-row" key={contact.type}>
                  <strong>{contact.type}</strong>
                  <p>
                    <span>TEL :</span> {contact.tel}
                  </p>
                  <p>
                    <span>FAX :</span> {contact.fax}
                  </p>
                  <p>
                    <span>E-MAIL :</span> {contact.email}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-box">
            <a
              href="https://rigas.co.kr/en/customer/inquiry.php"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>Inquiry</span>
              <LinkArrow />
            </a>
            <a href="https://rigas.co.kr/en/" target="_blank" rel="noreferrer" className="btn">
              <span>Homepage</span>
              <LinkArrow />
            </a>
          </div>
        </div>
      </Anime>
    </CatalogPage>
  );
}
