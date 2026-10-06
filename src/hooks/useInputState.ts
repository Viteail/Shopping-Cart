import { useState } from "react";

export const useInputState = () => {
  const [inputValue, setInputValue] = useState(1);

  const handleIncrementValue = () => {
    setInputValue((prev) => prev + 1);
  };

  const handleDecrementValue = () => {
    setInputValue((prev) => prev - 1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setInputValue(Number(e.target.value));
  };

  return {
    inputValue,
    handleIncrementValue,
    handleDecrementValue,
    handleInputChange,
  };
};
