import CheckBox from "../Checkbox";

interface TBodyProps {
  data: Record<string, string>[];
  columns: string[];
  dataChecked: () => void;
}

const TableTbody: React.FC<TBodyProps> = ({ data, columns, dataChecked }) => {
  return (
    <tbody className="text-gray-700 text-sm">
      {data.map((row, index) => (
        <tr key={index} className="border-b border-[#F2F2F2]">
          <td className="ps-6">
            <CheckBox checked={false} onChange={dataChecked} />
          </td>
          {columns.map((col, colIndex) => (
            <td key={colIndex} className="py-5 px-6">
              {row[col.toLowerCase()]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableTbody;
