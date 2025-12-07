"use client";

import Header from "@/components/header";
import { MailOutlined } from "@ant-design/icons";
import { Table, TableColumnsType, Tooltip } from "antd";

const CommunicationPage = () => {
  const messages = [
    {
      key: "1",
      from: "Prof. Greenfield",
      role: "Advisor",
      text: "Don't forget to upload your project proposal by Friday.",
      sentAt: "12/12/2025 - 12:30",
      color: "bg-portal-green/15 text-portal-green",
    },
    {
      key: "2",
      from: "Secretariat",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      sentAt: "12/12/2025 - 12:30",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
    {
      key: "3",
      from: "Secretariat",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      sentAt: "12/12/2025 - 12:30",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
    {
      key: "4",
      from: "Secretariat",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      sentAt: "12/12/2025 - 12:30",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
    {
      key: "5",
      from: "Secretariat",
      role: "System",
      text: "Course registration for Spring semester opens next Monday.",
      sentAt: "12/12/2025 - 12:30",
      color: "bg-portal-yellow/20 text-portal-dark",
    },
  ];

  const columns: TableColumnsType<any> = [
    {
      title: "De",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "Date",
      dataIndex: "sentAt",
      key: "sentAt",
    },
    {
      title: "Message",
      dataIndex: "text",
      key: "text",
    },
  ];
  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 overflow-scroll">
      <Header title="Table de bord" />
      <div className="w-full overflow-auto">
        <Table
          dataSource={messages}
          columns={columns}
          scroll={{ x: "920px" }}
        />
      </div>
    </main>
  );
};

export default CommunicationPage;
