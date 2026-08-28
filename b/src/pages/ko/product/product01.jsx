import { CatalogPage } from "catalog/CatalogPage";
import { Image } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "product01",
};

export default function Product01() {
  return (
    <CatalogPage pageInfo={pageInfo} className="product-detail">
      <div className="product-detail-layout">
        <figure className="product-detail-visual">
          <Image src="product/prod-img.png" alt="" />
        </figure>

        <div className="product-detail-main">
          <header className="product-detail-intro">
            <h1 className="product-detail-title">Atmospheric Environmental <br />Calibration Standards</h1>
            <div className="product-detail-desc">
              <p>
              Environment is one of critical element affecting to our life. <br />
              Therefore, accurate standard gas shall be used to monitor and measure industrial effluents. <br />
              RIGAS Co., Ltd. Provides high accurate calibration standard gas for measuring various environmental pollutants.
              </p>
            </div>
          </header>

          <div className="product-detail-scroll wheel_prevent">
            <div className="product-detail-scroll-inner" data-slot="scroll-content">
              {/* TODO: Components / Mixed example HTML로 교체 */}
              <figure className="product-detail-media">
                <Image src="product/prod-table.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </CatalogPage>
  );
}
