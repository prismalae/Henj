/**
 * Responsive reference table. Scrolls inside its own container rather than
 * letting the page scroll sideways, and restates the column header on each
 * cell below 700px so a narrow screen still reads as rows.
 */
export default function SpecTable({ columns, rows, caption }) {
  return (
    <div className="spec-table">
      <table>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>{columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={columns[i]} data-label={columns[i]}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
