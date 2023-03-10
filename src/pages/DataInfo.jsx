import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from "xlsx";

const DataInfo = () => {
  const [xlsxData, setXlsxData] = useState([]);

  useEffect(() => {
    (async () => {
      const f = await (await fetch("/files/xlxdata.xlsx")).arrayBuffer();
      const wb = read(f, { sheetRows: "20" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = utils.sheet_to_json(ws);
      setXlsxData(data);
      console.log(data);
    })();
  }, []);

  const exportFile = useCallback(() => {
    const ws = utils.json_to_sheet(xlsxData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "mydata.csv");
  }, [xlsxData]);

  return (
    <div className="">
      <button
        className="bg-indigo-600 px-6 py-2 rounded-md text-white"
        onClick={exportFile}
      >
        Download Data
      </button>

      <div className="mt-10 overflow-x-auto shadow-lg">
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
              </tr>
            </thead>
            {xlsxData?.map((xlx, index) => (
              <tbody key={index}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {xlx.FirstName}
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {xlx.LastName}
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {xlx.Email}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {xlx.Title}
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataInfo;
