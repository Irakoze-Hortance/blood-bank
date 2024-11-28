import React from "react";

// Skeleton Loader Component for Table Rows
const SkeletonRow = ({ columnsCount }: { columnsCount: number }) => {
  return (
    <tr>
      {Array.from({ length: columnsCount }).map((_, index) => (
        <td key={index} className="py-2 px-2 text-sm">
          <div className="w-full h-3 bg-gray-300 animate-pulse"></div>
        </td>
      ))}
    </tr>
  );
};

// Table Component
export function Table<T>({
  data,
  isLoading,
  columns,
}: {
  data: T[] | null;
  isLoading: boolean;
  columns: { header: string; accessor: (row: T) => React.ReactNode }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50 border-b">
            {columns.map((column, index) => (
              <th
                key={index}
                className="text-left py-3 px-4 text-sm font-medium text-gray-600"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            // Show 3 rows of skeleton loaders
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonRow key={index} columnsCount={columns.length} />
            ))
          ) : data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-4 px-4 text-sm text-gray-600"
                  >
                    {column.accessor(row)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-4 px-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
