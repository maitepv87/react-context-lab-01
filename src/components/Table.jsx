export const Table = ({ data, config, keyFuntion }) => {
  const renderedRows = data.map((rowData) => {
    const renderCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFuntion(rowData)}>
        {renderCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((columnConfig) => {
    return <th key={columnConfig.label}>{columnConfig.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
