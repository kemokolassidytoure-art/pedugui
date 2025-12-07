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

export { normalizePhoneNumber };
