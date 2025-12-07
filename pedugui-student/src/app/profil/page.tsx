"use client";

import Header from "@/components/header";
import { Card, Form, Input } from "antd";
import { useState } from "react";
import IDImageCard from "@/components/idImageCard";

const ProfilePage = () => {
  const [idImage, setIdImage] = useState<string | null>("logo.png");

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) setIdImage(URL.createObjectURL(file));
  };

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 gap-2 overflow-scroll">
      <Header title="Profil" />

      {/* --- Student Info --- */}
      <Card title={<h2 className="font-semibold text-lg">Info de l'élève</h2>}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ID Picture */}
          <div className="flex mx-auto">
            <IDImageCard />
          </div>

          <Form
            initialValues={{
              id: "STU-2025-014",
              classe: "CM1",
              lastName: "Fode",
              firstName: "Moussa",
              dateOfBirth: "14 Janvier 1990",
              sex: "Masculin",
              phoneNumber: "662 33 67 94",
              email: "fode.moussa@gmail.com",
              quartier: "Hamdallaye",
              commune: "Ratoma",
            }}
            layout="vertical"
            className="lg:col-start-2 lg:col-end-5 flex flex-col gap-2"
          >
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item label="ID" id="id" name="id">
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Classe" id="classe" name="classe">
                <Input size="large" />
              </Form.Item>
            </div>
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
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2">
              <Form.Item label="Quartier" id="quartier" name="quartier">
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Commune" id="commune" name="commune">
                <Input size="large" />
              </Form.Item>
            </div>
          </Form>
        </div>
      </Card>

      <div className="h-4"></div>
      {/* --- Family Sections Template --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Card
            title={
              <h2 className="font-semibold text-lg">Information du père</h2>
            }
          >
            <Form
              initialValues={{
                lastName: "Fode",
                firstName: "Alphonse",
                phoneNumber: "662 33 67 94",
                email: "fode.alphone@gmail.com",
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
          </Card>
        </div>
        <div>
          <Card
            title={
              <h2 className="font-semibold text-lg">Information de la mère</h2>
            }
          >
            <Form
              initialValues={{
                lastName: "Camara",
                firstName: "Binta",
                phoneNumber: "662 33 80 94",
                email: "camara.binta@gmail.com",
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
          </Card>
        </div>
      </div>

      <div className="h-4"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Card
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
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

/* ---------------------- Reusable Components ---------------------- */

function InputField({ label }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-portal-dark/70">{label}</label>
      <input
        className="
          rounded-xl border border-portal-yellow/40 
          px-3 py-2 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-portal-yellow/50
        "
        type="text"
      />
    </div>
  );
}

function AntdInputField({ label }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-portal-dark/70">{label}</label>
      <Input
        classNames={{
          input:
            "rounded-xl border border-portal-yellow/40 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-portal-yellow/50",
        }}
        type="text"
      />
    </div>
  );
}

function FamilySection({ title }: any) {
  return (
    <Card title={<h2 className="font-semibold text-lg">{title}</h2>}>
      <div className="flex flex-col gap-4">
        <AntdInputField label="First Name" />
        <InputField label="Last Name" />

        <InputField label="Phone Number" />
        <InputField label="Email" />
      </div>
    </Card>
  );
}
