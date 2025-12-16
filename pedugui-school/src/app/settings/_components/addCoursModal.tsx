"use client";
import { CodeDescriptionOption } from "@/baseTypes";
import ValidTeacherMatriculeField from "@/components/fields/validTeacherMatriculeField";
import { Form, Modal, Select } from "antd";

interface IAddCoursModalProps {
  isOpen: boolean;
  classSubjectOptions: CodeDescriptionOption[];
  classRoomOptions: CodeDescriptionOption[];
  handleOk: () => void;
}

const AddCoursModal = ({
  isOpen,
  handleOk,
  classSubjectOptions,
  classRoomOptions,
}: IAddCoursModalProps) => {
  const [form] = Form.useForm<any>();
  return (
    <Modal
      // style={{ maxWidth: "1728px" }}
      title="Ajouter un cours"
      // width={{
      //   xs: "90%",
      //   sm: "90%",
      //   md: "90%",
      //   lg: "90%",
      //   xl: "60%",
      //   xxl: "60%",
      // }}
      centered
      // styles={{ mask: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
      mask={{ blur: false }}
      closable={{ "aria-label": "Custom Close Button" }}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleOk}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Matière" id="classSubject" name="classSubject">
          <Select
            size="large"
            options={classSubjectOptions.map((c) => {
              return { value: c.code, label: c.description };
            })}
          />
        </Form.Item>
        <Form.Item label="Salle de classe" id="classRoom" name="classRoom">
          <Select
            size="large"
            options={classRoomOptions.map((c) => {
              return { value: c.code, label: c.description };
            })}
          />
        </Form.Item>
        <ValidTeacherMatriculeField formInstance={form} />
      </Form>
    </Modal>
  );
};

export default AddCoursModal;
