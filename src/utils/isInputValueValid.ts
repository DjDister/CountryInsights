const isInputValueValid = (value: string) => {
  return Number(value) >= 2 && Number(value) <= 10;
};

export default isInputValueValid;
