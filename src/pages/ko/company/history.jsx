import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "company",
  depth2: "history",
};

const historyData = [
  {
    period: "Beginning",
    range: "1900s - 2000s",
    bar: "linear-gradient(to right, var(--secondary), var(--primary))",
    accent: "#F05264",
    years: [
      { year: "2008. 03.", items: ["Small & Medium Business Technology Innovation Small Group Supporting Project (Korea Technology and Information Promotion Agency for SMEs)"] },
      { year: "2007. 06.", items: ["Obtained INNO-BIZ Certificate (Small & Medium Business Administration)", "Approved as Company of Daedeok Special R&D Zone (Ministry of Science and Technology)"] },
      { year: "2002. 04.", items: ["Appointed as Clean Workplace (Korea Occupational Safety & Health Agency)"] },
      { year: "2001. 09.", items: ["Appointed as Standard Gas Testing Agency by Environmental Technology Development Act (Korea National Institute of Environmental Research)"] },
      { year: "1999. 12.", items: ["Obtained Venture Business Certificate (Small & Medium Business Administration)"] },
      { year: "1999. 03.", items: ["Obtained Certificated of Gas Analysis and Science Research Institute as Corporate-affiliated Research Institute"] },
      { year: "1998. 09.", items: ["Established a corporation, KS GAS-HITEC Co., Ltd"] },
    ],
  },
  {
    period: "Growth",
    range: "2010s",
    bar: "linear-gradient(to right, var(--primary), var(--tertiary))",
    accent: "#AC1728",
    years: [
      { year: "2017. 02.", items: ["Expansion of the 2nd plant in Daedeok Industrial Zone"] },
      { year: "2016. 12.", items: ["Obtained Clean mark as TOP3 of Reducing Exposure level"] },
      { year: "2016. 04.", items: ["Obtained Youth-friendly hidden champion certificate (Ministry of Employment and Labor)"] },
      { year: "2014. 01.", items: ["Obtained Certificate of Good Workplace by Risk Assessment (Korea Occupational Safety & Health Agency)"] },
      { year: "2013. 10.", items: ["Selected as a hidden champion (Ministry of Employment and Labor)"] },
      { year: "2012. 01.", items: ["Changed CEO from Lee Kwang-Woo to Lee Sang-Ho"] },
      { year: "2011. 05.", items: ["Expanded and moved Corporate-affiliated Research Institute to 17-11 Munpyeong-dong"] },
    ],
  },
  {
    period: "Innovation",
    range: "2020s - Present",
    bar: "var(--tertiary)",
    accent: "#6C0612",
    years: [
      { year: "2026. 05.", items: ["Patent registration (No. 10-2966753 Process Gas Cylinder Lift Device)"] },
      { year: "2025. 10.", items: ["RIGAS awarded Presidential commendation and received 10 Billion Sales Tower"] },
      { year: "2024. 10.", items: ["Inauguration of new CEO", "Completion of the new headquarters and relocation of the headquarters"] },
      { year: "2023. 03.", items: ["Use of ILAC-MRA mark in the field of KOLAS authorized Reference Material Producers"] },
      { year: "2022. 06.", items: ["Selected as 2022 Small Giants by the Ministry of Employment and Labor (2022.05.01~2023.04.30)", "Development of Hydrogen fluoride standard gas for semiconductor"] },
      { year: "2021. 12.", items: ["Developing and supplying HF gas CRM in accordance with ISO 17034, KOLAS"] },
      { year: "2020. 09.", items: ["Relocating the headquarters"] },
    ],
  },
];

export default function CompanyHistory() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper history">
      <div className="cover-contents-wrap">
        <div className="wrap">
          <div className="page-head">
            <Anime anime="fadeUp" delay={0.15} className="page-head-title">
              <p className="page-head-cate">COMPANY</p>
              <h2 className="page-head-sbj">Our History</h2>
            </Anime>
              <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
                <p className="break-keep">
                  RIGAS, Specialized Company on Standard Gas since 1998! <br />
                  We produce a variety of standard gas with over 650,000 permits.
                </p>
              </Anime>
          </div>

          <div className="history-timeline">
            <Anime anime="fadeUp" delay={0.5} className="history-col history-col--spacer" aria-hidden="true">
              <p className="history-period">　</p>
              <div className="history-range history-range--spacer history-range--spacer-start">　</div>
              <ul className="history-years"></ul>
            </Anime>

            {historyData.map((col, index) => (
              <Anime key={col.period} anime="fadeUp" delay={0.6 + index * 0.1} className="history-col">
                <p className="history-period">{col.period}</p>
                <div className="history-range" style={{ background: col.bar }}>
                  {col.range}
                </div>
                <ul className="history-years">
                  {col.years.map((y, i) => (
                    <li key={y.year} className="history-year">
                      <span className="history-year-marker" style={{ color: col.accent }}>
                        <span className="history-year-dot" style={i === 0 ? { background: col.accent } : undefined} />
                        {y.year}
                      </span>
                      <ul className="history-items">
                        {y.items.map((item, i) => (
                          <li key={i} className="history-item">
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Anime>
            ))}

            <Anime anime="fadeUp" delay={0.9} className="history-col history-col--spacer" aria-hidden="true">
              <p className="history-period">　</p>
              <div className="history-range history-range--spacer history-range--spacer-end">　</div>
              <ul className="history-years"></ul>
            </Anime>
          </div>
        </div>
      </div>
    </CatalogPage>
  );
}
