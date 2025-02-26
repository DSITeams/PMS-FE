import CheckBox from "../Checkbox";

interface TableRow {
  code: string;
  date: string;
  from: string;
  to: string;
  description: string;
  user: string;
  mod: string;
}

interface TBodyProps {
  data: TableRow[];
  dataChecked: () => void;
}
const TableTbody: React.FC<TBodyProps> = ({ data, dataChecked }) => {
  return (
    <tbody className="text-gray-700 text-sm">
      {data.map((row, index) => (
        <tr key={index} className="border-b border-[#F2F2F2]">
          <td className="ps-6">
            <CheckBox checked={false} onChange={dataChecked} />
          </td>
          <td className="py-5 px-4">{row.code}</td>
          <td className="py-5 px-6">{row.date}</td>
          <td className="py-5 px-6">{row.from}</td>
          <td className="py-5 px-6">{row.to}</td>
          <td className="py-5 px-6">{row.description}</td>
          <td className="py-5 px-6">{row.user}</td>
          <td className="py-5 px-6">{row.mod}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableTbody;
