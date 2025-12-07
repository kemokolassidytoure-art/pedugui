"use client";
import Header from "@/components/header";
import { Table, TableColumnsType } from "antd";
import {} from "react";

interface ExpandedDataType {
  key: React.Key;
  cours: string;
  title: string;
  grade: number;
}

const ResultPage = () => {
  const data = [
    {
      key: "1",
      title: "Premier trimestre",
      average: "12.6 / 20",
      bestAverage: "14.6 / 20",
      worstAverage: "10.6 / 20",
      rank: "5 / 35",
    },
    {
      key: "2",
      title: "Premier trimestre",
      average: "12.6 / 20",
      bestAverage: "14.6 / 20",
      worstAverage: "10.6 / 20",
      rank: "5 / 35",
    },
    {
      key: "3",
      title: "Premier trimestre",
      average: "12.6 / 20",
      bestAverage: "14.6 / 20",
      worstAverage: "10.6 / 20",
      rank: "5 / 35",
    },
    {
      key: "4",
      title: "Premier trimestre",
      average: "12.6 / 20",
      bestAverage: "14.6 / 20",
      worstAverage: "10.6 / 20",
      rank: "5 / 35",
    },
    {
      key: "5",
      title: "Premier trimestre",
      average: "12.6 / 20",
      bestAverage: "14.6 / 20",
      worstAverage: "10.6 / 20",
      rank: "5 / 35",
    },
  ];

  const columns: TableColumnsType<any> = [
    {
      title: "Evaluation",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Moyenne",
      dataIndex: "average",
      key: "average",
    },
    {
      title: "Moyenne Sup",
      dataIndex: "bestAverage",
      key: "bestAverage",
    },
    {
      title: "Moyenne Inf",
      dataIndex: "worstAverage",
      key: "worstAverage",
    },
    {
      title: "Rang",
      dataIndex: "rank",
      key: "rank",
    },
  ];

  const expandColumns: TableColumnsType<ExpandedDataType> = [
    { title: "Matière", dataIndex: "title", key: "title", width: 50 },
    { title: "Note", dataIndex: "grade", key: "grade", width: 50 },
  ];

  const expandedRowRender = () => (
    <div className="w-2xs h-52 overflow-auto">
      <Table<ExpandedDataType>
        columns={expandColumns}
        dataSource={expandDataSource}
        pagination={false}
      />
    </div>
  );

  const expandDataSource = Array.from({ length: 30 }).map<ExpandedDataType>(
    (_, i) => ({
      key: i.toString(),
      cours: "BIO",
      title: "Biologie",
      grade: 10,
    })
  );

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 overflow-scroll">
      <Header title="Résultat" />
      <div className="w-full overflow-auto">
        <Table
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
          dataSource={data}
          columns={columns}
          scroll={{ x: "920px" }}
        />
      </div>
    </main>
  );
};

export default ResultPage;
