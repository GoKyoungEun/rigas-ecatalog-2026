import { Fragment } from "react";

export default function GroupedSpecTable({ groups = [], colWidths = [], className }) {
  return (
    <table className={`spec-table-grouped${className ? ` ${className}` : ""}`}>
      {colWidths.length > 0 && (
        <colgroup>
          {colWidths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
      )}
      <tbody>
        {groups.map((group, gi) =>
          group.rows.map((pair, ri) => (
            <tr key={`${gi}-${ri}`}>
              {ri === 0 && (
                <th className="spec-table-grouped-cat" rowSpan={group.rows.length}>
                  {group.label}
                </th>
              )}
              {pair.map((item, ci) =>
                item ? (
                  <Fragment key={ci}>
                    <th>{item.label}</th>
                    <td>{item.value}</td>
                  </Fragment>
                ) : (
                  <Fragment key={ci}>
                    <th />
                    <td />
                  </Fragment>
                ),
              )}
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
}
