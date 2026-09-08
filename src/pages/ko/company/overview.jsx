import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Video } from "components/elements";

const pageInfo = {
  depth1: "company",
  depth2: "overview",
};

const visionItems = [
  {
    img: "company/overview-img1.png",
    label: ["Market", "Leadership"],
    desc: (
      <>
        Since its foundation in 1998, <br />
        RIGAS has led the localization <br />
        of standard gas production in Korea.
      </>
    ),
  },
  {
    img: "company/overview-img2.png",
    label: ["Quality", "Excellence"],
    desc: (
      <>
        With strict quality control <br />
        and technical expertise, <br />
        RIGAS ensures precision and reliability.
      </>
    ),
  },
  {
    img: "company/overview-img3.svg",
    center: true,
    title: "Vision",
  },
  {
    img: "company/overview-img4.png",
    label: ["Global", "Expansion"],
    desc: (
      <>
        Since beginning exports in 2016, <br />
        RIGAS has expanded its presence <br />
        to more than 40 countries worldwide.
      </>
    ),
  },
  {
    img: "company/overview-img5.png",
    label: ["Standard", "Value"],
    desc: (
      <>
        Beyond standard gases, <br />
        RIGAS delivers reliable solutions <br />
        for research and industry.
      </>
    ),
  },
];

export default function CompanyOverview() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper overview">
      <div className="companyOverview">
        <div className="bg">
          <Video src="video/overview-bg.mp4" autoPlay loop muted />
        </div>
        <div className="cover-contents-wrap">
          <div className="wrap">
            <div className="page-head">
              <Anime anime="fadeUp" delay={0.15} className="page-head-title">
                <p className="page-head-cate">COMPANY</p>
                <h2 className="page-head-sbj">About RIGAS</h2>
              </Anime>
              <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
                <p className="break-keep">
                  We provide high-accuracy calibration gases and certified reference materials for
                  environmental, industrial, and scientific applications. <br />
                  We deliver reliable solutions built on precision manufacturing, continuous
                  innovation, and internationally recognized quality standards.
                </p>
              </Anime>
            </div>

            <Anime
              anime={{ default: "scaleUp", mobile: "fadeUp" }}
              delay={0.6}
              className="overview-vision"
            >
              <ul className="overview-vision-list">
                {visionItems.map((item, i) => (
                  <li
                    key={item.img}
                    className={`overview-vision-item${item.center ? " overview-vision-item--center" : ""}`}
                  >
                    <div className="overview-vision-circle-slot">
                      {i > 0 && (
                        <span className="overview-vision-connector">
                          <Image src="company/ico-plus.svg" alt="" />
                        </span>
                      )}
                      {i > 0 && (
                        <Image
                          src="company/ico-dot-line.svg"
                          alt=""
                          className="overview-vision-divider"
                        />
                      )}
                      <div className="overview-vision-circle">
                        <Image src={item.img} alt="" />
                        {item.center ? (
                          <div className="overview-vision-circle-text">
                            <strong>{item.title}</strong>
                            <p>
                              Creating trusted
                              <br />
                              standards through
                              <br />
                              precision and innovation
                            </p>
                          </div>
                        ) : (
                          <div className="overview-vision-circle-label">
                            {item.label[0]}
                            <br />
                            {item.label[1]}
                          </div>
                        )}
                      </div>
                    </div>
                    {!item.center && <p className="overview-vision-desc">{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </Anime>
          </div>
        </div>
      </div>
    </CatalogPage>
  );
}
