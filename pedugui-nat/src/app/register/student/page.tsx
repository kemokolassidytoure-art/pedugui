"use client";
import IDImageCard from "@/components/idImageCard";
import Header from "@/components/header";
import { Card, Form, Input } from "antd";

const StudentRegistrationPage = () => {
  const familySection = ({
    title,
    prefix,
    showIsAlive = true,
  }: {
    title: string;
    prefix: string;
    showIsAlive?: boolean;
  }) => {
    return (
      <div>
        <Card title={<h2 className="font-semibold text-lg">{title}</h2>}>
          <div className="flex flex-col gap-4">
            <Form.Item
              label="Nom"
              id={`${prefix}LastName`}
              name={`${prefix}LastName`}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Prénom"
              id={`${prefix}FirstName`}
              name={`${prefix}FirstName`}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Numero de téléphone"
              id={`${prefix}PhoneNumber`}
              name={`${prefix}PhoneNumber`}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Email"
              id={`${prefix}Email`}
              name={`${prefix}Email`}
            >
              <Input size="large" />
            </Form.Item>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 gap-2 overflow-scroll">
      <Header title="Profil" />

      <Form layout="vertical">
        {/* --- Student Info --- */}
        <Card
          title={<h2 className="font-semibold text-lg">Info de l'élève</h2>}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* ID Picture */}
            <div className="flex mx-auto">
              <IDImageCard />
            </div>

            <div className="lg:col-start-2 lg:col-end-5 flex flex-col gap-2">
              <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
                <Form.Item label="Nom" id="lastName" name="lastName">
                  <Input size="large" />
                </Form.Item>
                <Form.Item label="Prénom" id="firstName" name="firstName">
                  <Input size="large" />
                </Form.Item>
              </div>
              <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
                <Form.Item
                  label="Date de naissance"
                  id="dateOfBirth"
                  name="dateOfBirth"
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item label="Genre" id="sex" name="sex">
                  <Input size="large" />
                </Form.Item>
              </div>
              <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
                <Form.Item label="Quartier" id="quartier" name="quartier">
                  <Input size="large" />
                </Form.Item>
                <Form.Item label="Commune" id="commune" name="commune">
                  <Input size="large" />
                </Form.Item>
              </div>
              <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
                <Form.Item
                  label="Numero de téléphone"
                  id="phoneNumber"
                  name="phoneNumber"
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item label="Email" id="email" name="email">
                  <Input size="large" />
                </Form.Item>
              </div>
            </div>
          </div>
        </Card>

        <div className="h-4"></div>
        {/* --- Family Sections Template --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            {familySection({ title: "Information du père", prefix: "father" })}
          </div>
          <div>
            {familySection({
              title: "Information de la mère",
              prefix: "mother",
            })}
          </div>
        </div>

        <div className="h-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            {/* <Card
            title={
              <h2 className="font-semibold text-lg">Information du tuteur</h2>
            }
          >
            <Form
              initialValues={{
                lastName: "Cisse",
                firstName: "Kiki",
                phoneNumber: "668 33 67 94",
                email: "cisse.kiki@gmail.com",
              }}
              layout="vertical"
              className="flex flex-col gap-4"
            >
              <Form.Item label="Nom" id="lastName" name="lastName">
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Prénom" id="firstName" name="firstName">
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Numero de téléphone"
                id="phoneNumber"
                name="phoneNumber"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Email" id="email" name="email">
                <Input size="large" />
              </Form.Item>
            </Form>
          </Card> */}
          </div>
        </div>
      </Form>
    </main>
  );
};

export default StudentRegistrationPage;
