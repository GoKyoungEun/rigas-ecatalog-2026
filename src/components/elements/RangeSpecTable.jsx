import { isValidElement } from "react";

function normalizeCell(cell) {
  if (cell !== null && typeof cell === "object" && !isValidElement(cell) && "value" in cell) {
    return cell;
  }
  return { value: cell };
}

export default function RangeSpecTable({ groups = [], subHeaders = [], rows = [], notes = [], colWidths = [], className }) {
  return (
    <div className={`spec-table-range-wrap${className ? ` ${className}` : ""}`}>
      <table className="spec-table--range">
        {colWidths.length > 0 && (
          <colgroup>
            {colWidths.map((w, i) => (
              <col key={i} style={{ width: w }} />
            ))}
          </colgroup>
        )}
        <thead>
          <tr>
            {groups.map((group, i) => (
              <th key={i} rowSpan={group.rowSpan} colSpan={group.colSpan}>
                {group.label}
              </th>
            ))}
          </tr>
          {subHeaders.length > 0 && (
            <tr>
              {subHeaders.map((label, i) => (
                <th key={i}>{label}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {rows.map((cells, ri) => (
            <tr key={ri}>
              {cells.map((cell, ci) => {
                if (cell === null) return null;
                const { value, rowSpan, colSpan } = normalizeCell(cell);
                return (
                  <td key={ci} rowSpan={rowSpan} colSpan={colSpan}>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {notes.length > 0 && (
        <ul className="spec-table-notes">
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
