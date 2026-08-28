import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";
import { Anime, Image, Video, } from "components/elements";

const pageInfo = {
  depth1: "last",
  depth2: "",
};

export default function Last() {
  return (
    <CatalogPage pageInfo={pageInfo} id="last" className="wrap header--nologo header--nognb">
      <Anime
        anime={{
          default: "fadeIn",
        }}
        delay={0}
        className="w-full h-[610px] flex items-center justify-center mo:h-[30vh]"
      >
        <Image src="last-logo.svg" className="w-[530px] mo:w-[70%]" />
      </Anime>
      <Anime
        anime={{
          default: "fadeUp",
        }}
        delay={0}
        className="w-full last-info"
      >
        <h2>We Make Standard</h2>
        <span className="bar"></span>
        <div className="inner">
          <div className="info-box">
            <p>(34323) 17, Daedeokdae-ro 1284beon-gil, Daedeok-gu, Daejeon, Korea(South) </p>
            <p><span>TEL : </span>+82-70-5031-6962</p>
            <p><span>FAX : </span>+82-42-935-8814</p>
            <p><span>EMAIL : </span>sales@rigas.co.kr</p>
          </div>
          <div className="btn-box">
            <a href="https://rigas.co.kr/en/customer/inquiry.php" target="_blank" className="btn">
              <span>Inquiry</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="8.43" height="14.032" viewBox="0 0 8.43 14.032">
                <path id="패스_36376" data-name="패스 36376" d="M15247.3,2915.346l6.309,6.309-6.309,6.309" transform="translate(-15246.596 -2914.639)" fill="none" stroke="#e90000" stroke-width="2"/>
              </svg>
            </a>
            <a href="https://rigas.co.kr/en/" target="_blank" className="btn">
              <span>Homepage</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="8.43" height="14.032" viewBox="0 0 8.43 14.032">
                <path id="패스_36376" data-name="패스 36376" d="M15247.3,2915.346l6.309,6.309-6.309,6.309" transform="translate(-15246.596 -2914.639)" fill="none" stroke="#e90000" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
      </Anime>
    </CatalogPage>
  );
}