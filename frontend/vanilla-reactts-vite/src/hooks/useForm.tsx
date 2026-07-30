import { useState } from "react";
type InitialStateForm = Record<string,unknown>;

export const useForm = (initialState: InitialStateForm = {}) => {
  const [formState, setFormState] = useState<InitialStateForm>(initialState);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type, name } = e.target;

    setFormState({
      ...formState,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };
  return { formState, onChangeInput };
};
