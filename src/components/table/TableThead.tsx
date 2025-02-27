import CheckBox from "../Checkbox";

interface TableTheadProps {
    dataChecked: (checked: boolean) => void;
    columns: string[];
  }
  
  const TableThead: React.FC<TableTheadProps> = ({ dataChecked, columns }) => {
    return (
      <thead>
        <tr className="border-b border-[#F2F2F2] text-gray-600 capitalize text-sm leading-normal">
          <th className="ps-6 w-[10px]">
            <CheckBox checked={false} onChange={dataChecked} />
          </th>
          {columns.map((column, index) => (
            <th key={index} className="py-5 px-6 text-left">{column}</th>
          ))}
        </tr>
      </thead>
    );
  };
  
  export default TableThead;
  