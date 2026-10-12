import { useState } from "react";

interface IInputState {
  displayValue: string;
  numberValue: number;
}

export const useInputState = (initValue: number = 1) => {
  const [inputValue, setInputValue] = useState<IInputState>({
    displayValue: String(initValue),
    numberValue: initValue,
  });

  const isValidValue = (val: number) => (val > 0 ? true : false);

  const handleIncrementValue = () => {
    setInputValue((prev) => {
      const nextNumValue = prev.numberValue + 1;

      return {
        displayValue: String(nextNumValue),
        numberValue: nextNumValue,
      };
    });
  };

  const handleDecrementValue = () => {
    setInputValue((prev) => {
      if (prev.numberValue > 1) {
        const nextNumValue = prev.numberValue - 1;

        return {
          displayValue: String(nextNumValue),
          numberValue: nextNumValue,
        };
      }
      return { ...prev };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const rawValue = e.target.value;
    const displayValue = rawValue.replace(/^0+/, "");

    const numValue = Number(displayValue);

    if (isValidValue(numValue))
      setInputValue({ displayValue: displayValue, numberValue: numValue });
    else setInputValue({ displayValue: "1", numberValue: 1 });
  };

  return {
    inputValue,
    handleIncrementValue,
    handleDecrementValue,
    handleInputChange,
  };
};
