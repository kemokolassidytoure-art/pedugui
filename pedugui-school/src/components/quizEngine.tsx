"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Radio,
  Checkbox,
  InputNumber,
  Input,
  Card,
  Button,
  Pagination,
  Typography,
  TableColumnsType,
  Table,
  Modal,
  Space,
  Tag,
  Progress,
} from "antd";
import Header from "@/components/good/header";
import { FolderOpenOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

interface IQuizProps {
  questions?: Record<string, any>[];
  answers?: Record<string, any>[];
  perPage?: number;
  readonly: boolean;
}

const QuizEngine = ({
  questions = [],
  answers = [],
  perPage = 10,
  readonly,
}: IQuizProps) => {
  // const [answers, setAnswers] = useState({});
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(questions.length / perPage);
  const startIndex = (page - 1) * perPage;
  const current = questions.slice(startIndex, startIndex + perPage);

  const updateAnswer = (id: string, value: string) => {
    // setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleFinish = () => {
    // if (onSubmit) onSubmit(answers);
  };

  const findAnswer = useCallback(
    (questionID: string) => {
      return answers.find((a) => a.id === questionID)?.value;
    },
    [answers]
  );

  const duration = 120;
  // TIMER
  const [timeLeft, setTimeLeft] = useState(duration);

  // Start countdown
  useEffect(() => {
    // if (submitted) return;

    const interval = setInterval(() => {
      setTimeLeft((t: number) => {
        if (t <= 1) {
          clearInterval(interval);
          // message.warning("Time is up! Auto-submitting...");
          // handleSubmit(); // auto-submit
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerColor =
    timeLeft <= duration * 0.15
      ? "red"
      : timeLeft <= duration * 0.3
      ? "orange"
      : "blue";

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  return (
    // <Card
    //   title={<Title level={3}>Quiz</Title>}
    //   style={{ maxWidth: 800, margin: "auto" }}
    // >
    <>
      <div className="flex justify-between items-center">
        {/* TIMER */}
        {/* <Progress
          percent={(timeLeft / duration) * 100}
          strokeColor={
            timerColor === "red"
              ? "#ff4d4f"
              : timerColor === "orange"
              ? "#fa8c16"
              : "#1677ff"
          }
          showInfo={false}
          style={{ marginBottom: 20 }}
        /> */}
        <Tag color={timerColor} style={{ fontSize: 16, padding: "6px 12px" }}>
          ⏱ {minutes}:{seconds}
        </Tag>
      </div>
      {current.map((q: any) => (
        <Card
          key={q.id}
          size="small"
          style={{ marginBottom: 16 }}
          variant="borderless"
          title={
            <Space>
              <strong>{q.title}</strong>
              <Tag color={"red"}>0 / 5</Tag>
              {/* {result && (
                  <Tag
                    color={
                      result.status === "success"
                        ? "green"
                        : result.status === "error"
                        ? "red"
                        : "default"
                    }
                  >
                    {result.text}
                  </Tag>
                )} */}
            </Space>
          }
          // title={<strong>{q.title}</strong>}
        >
          <Paragraph style={{ marginBottom: 12 }}>{q.description}</Paragraph>

          {/* ===== QUESTION TYPE SWITCH ===== */}
          {q.type === "radio" && (
            <Radio.Group
              onChange={(e) => updateAnswer(q.id, e.target.value)}
              value={findAnswer(q.id)}
              style={{ width: "100%" }}
              disabled={readonly}
            >
              {q.options.map((opt: any) => (
                <Radio key={opt} value={opt} style={{ display: "block" }}>
                  {opt}
                </Radio>
              ))}
            </Radio.Group>
          )}

          {q.type === "checkbox" && (
            <Checkbox.Group
              disabled={readonly}
              options={q.options}
              value={findAnswer(q.id)}
              // onChange={(checked) => updateAnswer(q.id, checked)}
              style={{ width: "100%" }}
            />
          )}

          {q.type === "number" && (
            <InputNumber
              disabled={readonly}
              style={{ width: "100%" }}
              value={findAnswer(q.id)}
              // onChange={(value) => updateAnswer(q.id, value)}
              placeholder="Enter a number"
            />
          )}

          {q.type === "short" && (
            <Input
              disabled={readonly}
              value={findAnswer(q.id)}
              onChange={(e) => updateAnswer(q.id, e.target.value)}
              placeholder="Short answer"
            />
          )}

          {q.type === "long" && (
            <TextArea
              disabled={readonly}
              rows={4}
              value={findAnswer(q.id)}
              onChange={(e) => updateAnswer(q.id, e.target.value)}
              placeholder="Long answer"
            />
          )}
        </Card>
      ))}

      {/* ===== PAGINATION ===== */}
      <div className="flex justify-between items-center mt-4">
        <Pagination
          current={page}
          total={questions.length}
          pageSize={perPage}
          onChange={setPage}
          showSizeChanger={false}
        />

        {page === totalPages && (
          <Button type="primary" size="large" onClick={handleFinish}>
            Submit Quiz
          </Button>
        )}
      </div>
      {/* </Card> */}
    </>
  );
};
export default QuizEngine;
