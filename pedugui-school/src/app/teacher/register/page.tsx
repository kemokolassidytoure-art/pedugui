"use client";

import { useTeacher_registerMutation } from "@/api/generated/pedugui-api";
import GenderSelect from "@/components/genderSelect";
import Header from "@/components/header";
import { normalizePhoneNumber } from "@/utils";
import { Button, Card, DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";

interface FormFields {
  lastName?: string;
  firstName?: string;
  dateOfBirth?: string;
  sex?: string;
  quartier?: string;
  commune?: string;
  phoneNumber?: string;
  email?: string;
  fatherLastName?: string;
  fatherFirstName?: string;
  fatherPhoneNumber?: string;
  fatherEmail?: string;
  motherLastName?: string;
  motherFirstName?: string;
  motherPhoneNumber?: string;
  motherEmail?: string;
  legalGuardianLastName?: string;
  legalGuardianFirstName?: string;
  legalGuardianPhoneNumber?: string;
  legalGuardianEmail?: string;
}

const TeacherRegistrationPage = () => {
  const [form] = Form.useForm<FormFields>();
  const today = dayjs();

  const teacherInfoSection = () => {
    return (
      <Card
        title={
          <h2 className="font-semibold text-lg">Information de l’enseignant</h2>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 gap-2">
            <Form.Item label="Nom" id="lastName" name="lastName">
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Date de naissance"
              id="dateOfBirth"
              name="dateOfBirth"
            >
              <DatePicker
                className="w-full"
                maxDate={today}
                size="large"
                format="DD/MM/YYYY"
              />
            </Form.Item>
            <Form.Item label="Quartier" id="quartier" name="quartier">
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Numero de téléphone"
              id="phoneNumber"
              name="phoneNumber"
              normalize={normalizePhoneNumber}
            >
              <Input size="large" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Form.Item label="Prénom" id="firstName" name="firstName">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Genre" id="sex" name="sex">
              <GenderSelect size="large" />
            </Form.Item>
            <Form.Item label="Commune" id="commune" name="commune">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Email" id="email" name="email">
              <Input size="large" />
            </Form.Item>
          </div>
        </div>
      </Card>
    );
  };

  const { mutate: registerTeacher } = useTeacher_registerMutation();

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 gap-2 overflow-scroll">
      <Header title="Enregistrer un(e) enseignant(e)" />

      <Form
        form={form}
        onFinish={async (values) => {
          console.log("in finish");
          console.log(values);
          await registerTeacher({
            lastName: values.lastName,
            firstName: values.firstName,
            dateOfBirth: values.dateOfBirth,
            sex: values.sex,
            quartier: values.quartier,
            commune: values.commune,
            phoneNumber: values.phoneNumber,
            email: values.email,
          });
        }}
        layout="vertical"
      >
        <Button htmlType="submit" className="mb-2">
          Enregistrer
        </Button>
        {teacherInfoSection()}
      </Form>
    </main>
  );
};

export default TeacherRegistrationPage;
