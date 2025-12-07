"use client";
import IDImageCard from "@/components/idImageCard";
import Header from "@/components/header";
import { Button, Card, DatePicker, Form, Input } from "antd";
import SchoolLevelSelect from "@/components/schoolLevelSelect";
import dayjs from "dayjs";
import { normalizePhoneNumber } from "@/utils";
import GenderSelect from "@/components/genderSelect";

const SchoolRegistrationPage = () => {
  const [form] = Form.useForm();
  const today = dayjs();

  const schoolInfoSection = () => {
    return (
      <Card
        title={
          <h2 className="font-semibold text-lg">Information de l'école</h2>
        }
      >
        <div className="flex flex-col gap-4">
          <Form.Item label="Nom" id="name" name="name">
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Date de création"
            id="creationDate"
            name="creationDate"
          >
            <DatePicker
              className="w-full"
              maxDate={today}
              size="large"
              format="DD/MM/YYYY"
            />
          </Form.Item>
          <Form.Item label="Niveau" id="level" name="level">
            <SchoolLevelSelect size="large" />
          </Form.Item>
          <Form.Item label="Quartier" id="quartier" name="quartier">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Commune" id="commune" name="commune">
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
          <Form.Item label="Email" id="email" name="email">
            <Input size="large" />
          </Form.Item>
        </div>
      </Card>
    );
  };

  const schoolMapSection = () => {
    return (
      <Card title={<h2 className="font-semibold text-lg">Carte</h2>}>
        <div className="flex flex-col gap-4">
          <p className="text-center">Map section</p>
        </div>
      </Card>
    );
  };

  const ownerSection = () => {
    return (
      <Card
        title={
          <h2 className="font-semibold text-lg">Information du propriétaire</h2>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ID Picture */}
          <div className="flex mx-auto">
            <IDImageCard />
          </div>

          <div className="lg:col-start-2 lg:col-end-5 flex flex-col gap-2">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item label="Nom" id="ownerLastName" name="ownerLastName">
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Prénom"
                id="ownerFirstName"
                name="ownerFirstName"
              >
                <Input size="large" />
              </Form.Item>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Date de naissance"
                id="ownerDateOfBirth"
                name="ownerDateOfBirth"
              >
                <DatePicker
                  className="w-full"
                  maxDate={today}
                  size="large"
                  format="DD/MM/YYYY"
                />
              </Form.Item>
              <Form.Item label="Genre" id="ownerSex" name="ownerSex">
                <GenderSelect size="large" />
              </Form.Item>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Quartier"
                id="ownerQuartier"
                name="ownerQuartier"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Commune" id="ownerCommune" name="ownerCommune">
                <Input size="large" />
              </Form.Item>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Numero de téléphone"
                id="ownerPhoneNumber"
                name="ownerPhoneNumber"
                normalize={normalizePhoneNumber}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Email" id="ownerEmail" name="ownerEmail">
                <Input size="large" />
              </Form.Item>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const directorSection = () => {
    return (
      <Card
        title={
          <h2 className="font-semibold text-lg">Information du directeur</h2>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ID Picture */}
          <div className="flex mx-auto">
            <IDImageCard />
          </div>

          <div className="lg:col-start-2 lg:col-end-5 flex flex-col gap-2">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Nom"
                id="directorLastName"
                name="directorLastName"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Prénom"
                id="directorFirstName"
                name="directorFirstName"
              >
                <Input size="large" />
              </Form.Item>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Date de naissance"
                id="directorDateOfBirth"
                name="directorDateOfBirth"
              >
                <DatePicker
                  className="w-full"
                  maxDate={today}
                  size="large"
                  format="DD/MM/YYYY"
                />
              </Form.Item>
              <Form.Item label="Genre" id="directorSex" name="directorSex">
                <GenderSelect size="large" />
              </Form.Item>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Quartier"
                id="directorQuartier"
                name="directorQuartier"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Commune"
                id="directorCommune"
                name="directorCommune"
              >
                <Input size="large" />
              </Form.Item>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item
                label="Numero de téléphone"
                id="directorPhoneNumber"
                name="directorPhoneNumber"
                normalize={normalizePhoneNumber}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Email" id="directorEmail" name="directorEmail">
                <Input size="large" />
              </Form.Item>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 gap-2 overflow-scroll">
      <Header title="Enregistrer une école" />

      <Form
        form={form}
        onFinish={(values) => {
          console.log("in finish");
          console.log(values);
        }}
        layout="vertical"
      >
        <Button htmlType="submit" className="mb-2">
          Enregistrer
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {schoolInfoSection()}
          {schoolMapSection()}
        </div>

        <div className="h-4"></div>

        {ownerSection()}

        <div className="h-4"></div>

        {directorSection()}
      </Form>
    </main>
  );
};

export default SchoolRegistrationPage;
