"use client";

import Header from "@/components/header";
import QuizEngine from "@/components/quizEngine";
import { Modal, Table, TableColumnsType } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
import { useState } from "react";

const questions = [
  {
    id: "q1",
    title: "1. What is the capital of France?",
    description: "Choose the correct option.",
    type: "radio",
    options: ["Paris", "London", "Berlin"],
  },
  {
    id: "q2",
    title: "2. Which colors are in the French flag?",
    description: "Select all that apply.",
    type: "checkbox",
    options: ["Blue", "Green", "White", "Red"],
  },
  {
    id: "q3",
    title: "3. How many continents are there?",
    description: "Enter a number.",
    type: "number",
  },
  {
    id: "q4",
    title: "4. Who wrote '1984'?",
    description: "",
    type: "short",
  },
  {
    id: "q5",
    title: "5. Explain the concept of gravity.",
    description: "Write a detailed explanation.",
    type: "long",
  },
];

const responses = [
  {
    id: "q1",
    value: "London",
  },
  {
    id: "q2",
    value: ["Green", "Red"],
  },
  {
    id: "q3",
    value: "30",
  },
  {
    id: "q4",
    value: "I don't know",
  },
  {
    id: "q5",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const quizzes = [
  {
    key: "1",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
    questions: questions,
    responses: responses,
  },
  {
    key: "2",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "3",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "4",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "5",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "6",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "7",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "8",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "9",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "10",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
  {
    key: "11",
    title: "Quiz 1",
    createdAt: "10/11/2025 - 07:00",
    expiredAt: "15/11/2025 - 07:00",
    status: "Corrigé",
    grade: "11 / 20",
    average: "12.6 / 20",
    bestGrade: "14.6 / 20",
    worstGrade: "10.6 / 20",
  },
];

const QuizPage = () => {
  const columns: TableColumnsType<any> = [
    {
      title: "",
      render(value, record, index) {
        return (
          <div className="flex justify-center cursor-pointer">
            <FolderOpenOutlined onClick={() => setIsModalOpen(true)} />
          </div>
        );
      },
    },
    {
      title: "Titre",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ouverture",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Fermeture",
      dataIndex: "expiredAt",
      key: "expiredAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Note",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Moyenne",
      dataIndex: "average",
      key: "average",
    },
    {
      title: "Note Supérieur",
      dataIndex: "bestGrade",
      key: "bestGrade",
    },
    {
      title: "Note Inférieur",
      dataIndex: "worstGrade",
      key: "worstGrade",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 overflow-scroll">
      <Header title="Quiz" />
      <div className="w-full overflow-auto">
        <Table dataSource={quizzes} columns={columns} scroll={{ x: "920px" }} />
      </div>
      <Modal
        style={{ maxWidth: "1728px" }}
        title="Quiz"
        width={{
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "60%",
          xxl: "60%",
        }}
        centered
        styles={{ mask: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <QuizEngine questions={questions} answers={responses} readonly={true} />
      </Modal>
    </main>
  );
};

export default QuizPage;
