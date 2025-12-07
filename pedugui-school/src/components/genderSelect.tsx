import { Select, SelectProps } from "antd";
import { FC } from "react";

type GenderSelectProps = SelectProps;

const GenderSelect: FC<GenderSelectProps> = ({ ...props }) => {
  return (
    <Select
      {...props}
      // defaultValue="M"
      options={[
        { value: "M", label: "Masculin" },
        { value: "F", label: "Féminin" },
      ]}
    />
  );
};

export default GenderSelect;
