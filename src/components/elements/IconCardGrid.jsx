import Image from "./Image";

export default function IconCardGrid({ items = [], className }) {
  return (
    <div className={`icon-card-grid${className ? ` ${className}` : ""}`}>
      {items.map((item, i) => (
        <div className="icon-card" key={i}>
          <div className="icon-card-icon">
            <Image src={item.icon} alt="" />
          </div>
          <p className="icon-card-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
