export default function SpecTable({ items = [], className }) {
  const half = Math.ceil(items.length / 2);
  const left = items.slice(0, half);
  const right = items.slice(half);
  const rowCount = Math.max(left.length, right.length);
  const columns = [left, right].map((col) => [
    ...col,
    ...Array(rowCount - col.length).fill(null),
  ]);

  return (
    <div className={`spec-table${className ? ` ${className}` : ""}`}>
      {columns.map(
        (col, ci) =>
          col.length > 0 && (
            <table className="spec-table-col" key={ci}>
              <tbody>
                {col.map((item, i) =>
                  item ? (
                    <tr key={i}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ) : (
                    <tr key={i} className="spec-table-row--empty">
                      <th>&nbsp;</th>
                      <td>&nbsp;</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          ),
      )}
    </div>
  );
}
