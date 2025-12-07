import { Select, SelectProps } from "antd";
import { FC } from "react";

type SchoolLevelSelectProps = SelectProps;

const SchoolLevelSelect: FC<SchoolLevelSelectProps> = ({ ...props }) => {
  return (
    <Select
      {...props}
      defaultValue="primaire"
      options={[
        { value: "maternelle", label: "Maternelle" },
        { value: "primaire", label: "Primaire" },
        { value: "college", label: "Collège" },
        { value: "lycee", label: "Lycée" },
      ]}
    />
  );
};

export default SchoolLevelSelect;
