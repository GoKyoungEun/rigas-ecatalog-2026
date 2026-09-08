import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "rigas-one",
  depth3: "rigas-one",
};

const tableGroups = [{ label: "Components" }, { label: "Concentration" }, { label: "Unit" }];

const nonReactiveRows = [
  ["iso-Butane", "0.9", "cmol/mol"],
  ["Oxygen", "15", "cmol/mol"],
  ["Oxygen", "18", "cmol/mol"],
  ["Carbon monoxide", "50", "µmol/mol"],
  ["Carbon monoxide", "75", "µmol/mol"],
  ["Hydrogen", "2", "cmol/mol"],
  ["Methane", "2.5", "cmol/mol"],
  ["Methane", "2.2", "cmol/mol"],
  ["Propane", "0.525", "cmol/mol"],
  ["Propane", "1.1", "cmol/mol"],
  ["Nitrogen", "99.999", "cmol/mol"],
];

const reactiveRows = [
  ["iso-Butylene", "10", "µmol/mol"],
  ["iso-Butylene", "100", "µmol/mol"],
  ["Nitric oxide", "18", "µmol/mol"],
  ["Ammonia", "25", "µmol/mol"],
  ["Ammonia", "50", "µmol/mol"],
  ["Hydrogen chloride", "10", "µmol/mol"],
  ["Chlorine", "10", "µmol/mol"],
  ["Hydrogen sulfide", "15", "µmol/mol"],
  ["Hydrogen sulfide", "25", "µmol/mol"],
  ["Hydrogen sulfide", "20 ~ 25", "µmol/mol"],
  ["Carbon monoxide", "50 ~ 100", "µmol/mol"],
  ["Methane", "0.9 ~ 2.5", "cmol/mol"],
  ["Oxygen", "12 ~ 18", "cmol/mol"],
];

export default function RigasOne() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail rigas-one">
      <div className="bg">
        <Image src="product/rigas-one-bg.jpg" alt="" />
      </div>
      <Anime anime="fadeRight" delay={0.3} className="product-detail-visual">
        <Image src="product/rigas-one-img.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">RIGAS | ONE</p>
            <h2 className="page-head-sbj">rigas | ONE</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>RIGAS 1L standard gas with refillable and high-pressure cylinders.</p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <Tabs
            tabs={[
              {
                key: "non-reactive",
                label: "Non-reactive gas",
                content: <RangeSpecTable groups={tableGroups} rows={nonReactiveRows} />,
              },
              {
                key: "reactive",
                label: "Reactive gas",
                scrollable: true,
                content: <RangeSpecTable groups={tableGroups} rows={reactiveRows} />,
              },
            ]}
          />
        </Anime>
      </div>
    </CatalogPage>
  );
}
