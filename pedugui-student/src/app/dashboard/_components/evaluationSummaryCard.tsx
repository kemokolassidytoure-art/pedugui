import { Card, Table, TableColumnsType } from "antd";

interface IEvaluationSummaryProps {
  className?: string;
}

const EvaluationSummaryCard = ({ className }: IEvaluationSummaryProps) => {
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

  return (
    <Card
      className={className}
      styles={{
        body: {
          padding: "8px",
        },
      }}
      title={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Résultats</h2>
          <button className="px-3 py-1 rounded-full text-xs bg-portal-green/10 text-portal-green font-medium">
            Voir detail
          </button>
        </div>
      }
    >
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ placement: ["none", "none"] }}
      />
    </Card>
  );
};

export default EvaluationSummaryCard;
