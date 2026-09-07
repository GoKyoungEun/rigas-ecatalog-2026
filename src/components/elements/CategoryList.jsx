export default function CategoryList({ groups = [], className }) {
  return (
    <div className={`category-list${className ? ` ${className}` : ""}`}>
      {groups.map((group, gi) => (
        <div className="category-list-col" key={gi}>
          <h4 className="category-list-title">{group.label}</h4>
          <ul className="category-list-items">
            {group.items.map((item, ii) => (
              <li key={ii}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
