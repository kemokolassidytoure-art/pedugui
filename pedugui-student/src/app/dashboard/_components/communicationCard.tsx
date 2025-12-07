import { Card, Table, TableColumnsType, Tooltip } from "antd";
interface IProfilCardProps {
  className?: string;
}

const CommunicationCard = ({ className }: IProfilCardProps) => {
  const messages = [
    {
      key: "1",
      from: "Prof. Greenfield",
      role: "Advisor",
      text: "Don't forget to upload your project proposal by Friday.",
      time: "2h ago",
      color: "bg-portal-green/15 text-portal-green",
    },
    {
      key: "2",
      from: "Registrar",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      time: "1 day ago",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
    {
      key: "3",
      from: "Registrar",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      time: "1 day ago",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
    {
      key: "4",
      from: "Registrar",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      time: "1 day ago",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
    {
      key: "5",
      from: "Registrar",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      time: "1 day ago",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
  ];

  const columns: TableColumnsType<any> = [
    {
      title: "De",
      dataIndex: "from",
      key: "from",
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="top" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: "Message",
      dataIndex: "text",
      key: "text",
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
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
          <h2 className="font-semibold text-lg">Communication</h2>
          <button className="cursor-pointer px-3 py-1 text-xs rounded-full bg-portal-yellow/30 hover:bg-portal-yellow/40 transition">
            Voir tout
          </button>
        </div>
      }
    >
      <Table
        dataSource={messages}
        columns={columns}
        pagination={{ placement: ["none", "none"] }}
      />
    </Card>
  );
};

export default CommunicationCard;
