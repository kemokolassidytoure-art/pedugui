import { ValidateStatus } from "antd/es/form/FormItem";
import { useEffect, useState } from "react";

const normalizePhoneNumber = (value?: string) => {
  if (!value) return "";

  const digits = value.replace(/\D/g, "").slice(0, 15);

  const p1 = digits.slice(0, 3);
  const p2 = digits.slice(3, 5);
  const p3 = digits.slice(5, 7);
  const p4 = digits.slice(7, 9);

  if (digits.length < 4) return `${p1}`;
  if (digits.length < 6) return `${p1} ${p2}`;
  if (digits.length < 8) return `${p1} ${p2} ${p3}`;
  return `${p1} ${p2} ${p3} ${p4}`;
};

export type ValidMatriculeStatus = "not-found" | "found" | "loading";

const getValidateStatus = (
  foundStatus: ValidMatriculeStatus,
  isLoading: boolean
): ValidateStatus => {
  if (isLoading) return "validating";

  if (foundStatus === "not-found") return "error";

  if (foundStatus === "found") return "success";

  return "";
};

const useDebounce: <T>(value: T, milliSeconds?: number) => [T, boolean] = (
  value,
  milliSeconds = 500
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, milliSeconds);

    const clear = () => clearTimeout(handler);
    return () => {
      setIsDebouncing(false);
      clear();
    };
  }, [value, milliSeconds]);

  return [debouncedValue, isDebouncing];
};

export { normalizePhoneNumber, getValidateStatus, useDebounce };
