import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink, CatalogPagingButton } from "catalog/CatalogNavigations";
import { AnimatePresence } from "framer-motion";
import { Anime, Image, Video } from "components/elements";
import { motion } from "framer-motion";
import { animeTransitions } from "components/elements/Anime";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCatalog } from "catalog/Catalog.context";
import { IMG_URL } from "configs";

const pageInfo = {
  depth1: "cover",
  depth2: "",
};

export default function Page() {
  const { pageSlug2 } = useParams();
  const scenes = ["index", "overview"];
  const sceneNo = scenes.indexOf(pageSlug2);

  const { isResponsive } = useCatalog();
  const mo = isResponsive;

  return (
    <CatalogPage pageInfo={pageInfo} className="cover">
      <AnimatePresence>
        {(sceneNo === 0 && pageSlug2 === 'index') && (
          <div className="index-section">
            <div className="bg">
              <Video src="video/cover-bg.mp4" autoPlay loop muted />
            </div>
            <Anime
              anime="scaleDown"
              delay={0.3}
              className="index-cover-title"
            >
              <div
                className="index-cover-title-mask"
                style={{
                  WebkitMaskImage: `url(${IMG_URL}/cover-title.svg)`,
                  maskImage: `url(${IMG_URL}/cover-title.svg)`,
                }}
              />
            </Anime>
            <Anime anime="fadeUp" delay={0.2} className="cover-contents-wrap">
              <Anime anime="fadeUp" delay={0.4} className="index-contents">
                <div className="index-grid">
                  <h2>Contents</h2>
                  <div className="index-list rigas-index-list pcView">
                    <div className="index-item index-item-company">
                      <h3>01 Company</h3>
                      <ul className="index-list">
                        <CatalogLink to="/cover/overview"><li>1. Overview <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/history"><li>2. History <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/certification"><li>3. Qualified Agency <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/facility"><li>4. R&D Achievement <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/global-network"><li>5. Global Network <span className="pageNum">00</span></li></CatalogLink>
                      </ul>
                    </div>
                    <div className="index-item index-item-product">
                      <h3>02 Product</h3>
                      <div className="index-product-cols">
                        <ul className="index-list">
                          <CatalogLink to="/company/products"><li>1. Maintaining Traceability <span className="pageNum">00</span></li></CatalogLink>
                          <CatalogLink to="/company/products"><li>2. Standard Gas <span className="pageNum">00</span></li></CatalogLink>
                          <CatalogLink to="/company/products"><li>3. Mixed Gas <span className="pageNum">00</span></li></CatalogLink>
                          <CatalogLink to="/company/manufacturing-process"><li>4. Gas Cylinder/Valve <span className="pageNum">00</span></li></CatalogLink>
                          <CatalogLink to="/company/products"><li>5. rigas | ONE Series <span className="pageNum">00</span></li></CatalogLink>
                        </ul>
                        <ul className="index-list">
                          <CatalogLink to="/system/overview"><li>6. rigas | PAS <span className="pageNum">00</span></li></CatalogLink>
                          <CatalogLink to="/system/overview"><li>7. RIGAS Regulator for Calibration Gases <span className="pageNum">00</span></li></CatalogLink>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="index-list rigas-index-list moView">
                    <div className="index-item">
                      <h3>01 Company</h3>
                      <ul className="index-list">
                        <CatalogLink to="/cover/overview"><li>1. Overview <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/history"><li>2. History <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/certification"><li>3. Qualified Agency <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/facility"><li>4. R&D Achievement <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/global-network"><li>5. Global Network <span className="pageNum">00</span></li></CatalogLink>
                      </ul>
                    </div>
                    <div className="index-item">
                      <h3>02 Product</h3>
                      <ul className="index-list">
                        <CatalogLink to="/company/products"><li>1. Maintaining Traceability <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/products"><li>2. Standard Gas <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/products"><li>3. Mixed Gas <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/manufacturing-process"><li>4. Gas Cylinder/Valve <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/company/products"><li>5. rigas | ONE Series <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/system/overview"><li>6. rigas | PAS <span className="pageNum">00</span></li></CatalogLink>
                        <CatalogLink to="/system/overview"><li>7. RIGAS Regulator for Calibration Gases <span className="pageNum">00</span></li></CatalogLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </Anime>
            </Anime>
          </div>
        )}
        {(sceneNo === 1 && pageSlug2 === 'overview') && (
          <div className="companyOverview">
            <div className="bg">
              <Video src="video/cover-bg.mp4" autoPlay loop muted />
            </div>
            <div className="index-cover-title">
              <div
                className="index-cover-title-mask"
                style={{
                  WebkitMaskImage: `url(${IMG_URL}/cover-title.svg)`,
                  maskImage: `url(${IMG_URL}/cover-title.svg)`,
                }}
              />
            </div>
            <div className="cover-contents-wrap">
              <div className="overview-box">
                <Anime anime="fadeIn" delay={0.4} className="overview-left">
                  <div className="overview-title">
                    <h2>RIGAS</h2>
                    <p className="break-keep">
                    We provides high-accuracy calibration gases <br />
                    and certified reference materials for <br />
                    environmental, industrial, and scientific <br />
                    applications. <br />
                    We deliver reliable solutions built on precision <br />
                    manufacturing, continuous innovation, and <br />
                    internationally recognized quality standards.
                    </p>
                  </div>
                </Anime>
                <ul className="overview-list">
                  <Anime anime="fadeUp" delay={1} className="overview-item">
                    <Image src="company/overview-item01.svg"></Image>
                    <hr />
                    <h3>Global <br />Traceability</h3>
                    <p className="break-keep">
                      Maintains full traceability to internationally recognized standards, ensuring reliable and accurate calibration results across various industries.
                    </p>
                  </Anime>
                  <Anime anime="fadeUp" delay={1.2} className="overview-item">
                    <Image src="company/overview-item02.svg"></Image>
                    <hr />
                    <h3>Precision <br />Manufacturing</h3>
                    <p className="break-keep">
                      Produces calibration gases using high-precision gravimetric methods and advanced cylinder treatment technologies for superior stability and consistency.
                    </p>
                  </Anime>
                  <Anime anime="fadeUp" delay={1.4} className="overview-item">
                    <Image src="company/overview-item03.svg"></Image>
                    <hr />
                    <h3>Research &amp; <br />Development</h3>
                    <p className="break-keep">
                      Operates a dedicated research institute focused on developing innovative gas standards and improving analytical accuracy for emerging applications.
                    </p>
                  </Anime>
                  <Anime anime="fadeUp" delay={1.6} className="overview-item">
                    <Image src="company/overview-item04.svg"></Image>
                    <hr />
                    <h3>Quality <br />Assurance</h3>
                    <p className="break-keep">
                      Ensures product reliability through rigorous quality control systems, certified processes, and comprehensive analytical verification.
                    </p>
                  </Anime>
                </ul>
              </div>
            </div>
          </div>
        )}

        {sceneNo === 0 && <Content1 key="cont1" sceneNo={sceneNo} />}
        {sceneNo === 1 && <Content2 key="cont2" sceneNo={sceneNo} />}
      </AnimatePresence>
    </CatalogPage>
  );
}

function Content1({ sceneNo }) {
  return (
    <Anime
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="visual content flex w-full h-full justify-center items-center"
    >
      
    </Anime>
  );
}

function Content2({ sceneNo }) {
  return (
    <Anime
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="visual content flex w-full h-full justify-center items-center"
    >
      <div className="bg gradient"></div>
    </Anime>
  );
}