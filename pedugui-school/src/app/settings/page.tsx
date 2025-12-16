"use client";
import {
  ClassRoomResult,
  ClassSubjectResult,
  CoursOccurrenceDocument,
  CoursResult,
  SchoolLevelResult,
  SchoolYear_findCours,
  SchoolYearResult,
  useSchoolYear_findActiveSchoolYearsQuery,
  useSchoolYear_findCoursQuery,
  useSchoolYear_findViewableSchoolYearsQuery,
} from "@/api/generated/pedugui-api";
import Header from "@/components/header";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, Form, Select, Table, TableColumnsType } from "antd";
import { useEffect, useMemo, useState } from "react";
import AddCoursModal from "./_components/addCoursModal";
import { CodeDescriptionOption } from "@/baseTypes";

interface ClassSubject {
  code: string;
  value: string;
}

interface ClassRoom {
  code: string;
  value: string;
}

interface SchoolLevel {
  code: string;
  value: string;
  classSubjects: ClassSubject[];
  classRooms: ClassRoom[];
}

interface SchoolYear {
  id: string;
  year: number;
  levels: SchoolLevel[];
}

const SettingsPage = () => {
  const [isAddCoursModalOpened, setIsAddCoursModalOpened] = useState(false);
  const { data: viewableYears, isPending: viewableYearIsPending } =
    useSchoolYear_findViewableSchoolYearsQuery();

  const [currentSchoolYear, setCurrentSchoolYear] = useState<
    SchoolYearResult | undefined
  >(undefined);

  const { data: cours } = useQuery<CoursResult[]>({
    queryKey: ["SchoolYear_findCours", currentSchoolYear?.id],
    queryFn: () => SchoolYear_findCours(currentSchoolYear!.id!),
    enabled: !!currentSchoolYear?.id,
  });

  const [currentSchoolLevel, setCurrentSchoolLevel] = useState<
    SchoolLevelResult | undefined
  >(undefined);

  const currentCours = useMemo(() => {
    return cours?.filter(
      (c) => c.coursLevel?.code === currentSchoolLevel?.code
    );
  }, [cours, currentSchoolLevel]);

  const classSubjectColumns: TableColumnsType<ClassSubjectResult> = [
    {
      // title: "Matière",
      dataIndex: "code",
      key: "code",
      render(value, record, index) {
        return record.description;
      },
    },
  ];

  const classRoomColumns: TableColumnsType<ClassRoomResult> = [
    {
      // title: "Local",
      dataIndex: "code",
      key: "code",
      render(value, record, index) {
        return record.description;
      },
    },
  ];

  const coursColumns: TableColumnsType<CoursResult> = [
    {
      title: "Matière",
      dataIndex: ["classSubject", "code"],
      key: "code",
      render(value, record, index) {
        return record.classSubject?.description;
      },
    },
    {
      title: "Local",
      dataIndex: ["classRoom", "code"],
      key: "code",
      render(value, record, index) {
        return record.classRoom?.description;
      },
    },
    {
      title: "Enseignant(e)",
      dataIndex: "teacher",
      key: "teacher",
      render(value, record, index) {
        return record.teacher?.name;
      },
    },
  ];

  useEffect(() => {
    if (!viewableYearIsPending) {
      setCurrentSchoolYear(viewableYears?.[0]);
      setCurrentSchoolLevel(viewableYears?.[0]?.schoolLevels?.[0]);
    }
  }, [
    viewableYears,
    viewableYearIsPending,
    setCurrentSchoolYear,
    setCurrentSchoolLevel,
  ]);

  const expandColumns: TableColumnsType<
    CoursOccurrenceDocument & { key: string }
  > = [
    { title: "Jour", dataIndex: "dayCode", key: "dayCode", width: 50 },
    {
      title: "Premier Jour",
      dataIndex: "firstOccurrence",
      key: "firstOccurrence",
      width: 50,
    },
    { title: "Débute à", dataIndex: "startTime", key: "startTime" },
    { title: "Finit à", dataIndex: "endTime", key: "endTime" },
  ];

  const expandedRowRender = (record: CoursResult) => (
    <div className="h-52 overflow-auto">
      <Table<CoursOccurrenceDocument & { key: string }>
        columns={expandColumns}
        dataSource={record.occurrences?.map(
          (d: CoursOccurrenceDocument, index: number) => {
            return {
              key: index.toString(),
              ...d,
            };
          }
        )}
        pagination={false}
      />
    </div>
  );

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 gap-2 overflow-scroll">
      <Header title="Paramètres" />

      <div className="flex justify-between mb-2 items-center">
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <p>Année scolaire</p>
            <Select
              size="large"
              value={currentSchoolYear?.id}
              onChange={(value) => {
                const y = viewableYears?.find((s) => s.id === value);
                setCurrentSchoolYear(y);
                setCurrentSchoolLevel(y?.schoolLevels?.[0]);
              }}
              options={viewableYears?.map((s) => {
                return { value: s.id, label: `${s.year} - ${s.year! + 1}` };
              })}
            />
          </div>
          <div className="flex items-center gap-1">
            <p>Niveau</p>
            <Select
              size="large"
              value={currentSchoolLevel?.code}
              onChange={(value) =>
                setCurrentSchoolLevel(
                  currentSchoolYear?.schoolLevels?.find((l) => l.code === value)
                )
              }
              options={currentSchoolYear?.schoolLevels?.map((l) => {
                return { value: l.code, label: l.description };
              })}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="grid grid-rows-2 gap-2">
          <Card title={<h2 className="font-semibold text-lg">Matières</h2>}>
            <Table
              showHeader={false}
              dataSource={currentSchoolLevel?.classSubjects}
              columns={classSubjectColumns}
              rowKey={"code"}
            />
          </Card>
          <Card title={<h2 className="font-semibold text-lg">Locaux</h2>}>
            <Table
              showHeader={false}
              dataSource={currentSchoolLevel?.classRooms}
              columns={classRoomColumns}
              rowKey={"code"}
            />
          </Card>
        </div>
        <div className="lg:col-start-2 lg:col-end-4">
          <Card
            title={
              <div className="flex justify-between">
                <h2 className="font-semibold text-lg">Cours</h2>
                <Button onClick={() => setIsAddCoursModalOpened(true)}>
                  <PlusCircleOutlined />
                </Button>
              </div>
            }
          >
            <Table
              expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
              dataSource={currentCours}
              columns={coursColumns}
              rowKey={"id"}
            />
          </Card>
        </div>
      </div>
      <AddCoursModal
        classRoomOptions={
          currentSchoolLevel?.classRooms?.map((c) => {
            return {
              code: c.code,
              description: c.description,
            } as CodeDescriptionOption;
          }) ?? []
        }
        classSubjectOptions={
          currentSchoolLevel?.classSubjects?.map((c) => {
            return {
              code: c.code,
              description: c.description,
            } as CodeDescriptionOption;
          }) ?? []
        }
        isOpen={isAddCoursModalOpened}
        handleOk={() => {
          setIsAddCoursModalOpened(false);
        }}
      />
    </main>
  );
};

export default SettingsPage;
