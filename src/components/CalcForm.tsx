import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";

export default function CalcForm() {
  const initialState: {
    M1: number | null;
    V1: number | null;
    M2: number | null;
    V2: number | null;
  } = {
    M1: null,
    V1: null,
    M2: null,
    V2: null,
  };

  const [calcState, setCalcState] = useState(initialState);
  const [result, setResult] = useState("");

  const calculate = () => {
    let result: number;

    if (
      Object.entries(calcState).filter(
        ([key, value]) => value == null || isNaN(value)
      ).length !== 1
    ) {
      alert("Please leave exactly one field open");
    } else {
      for (const [key, value] of Object.entries(calcState)) {
        if (value == null) {
          switch (key) {
            case "M1":
              result = (calcState.M2! * calcState.V2!) / calcState.V1!;
              setCalcState({
                ...calcState,
                M1: result,
              });
              setResult(`M1 = ${result}`);
              break;

            case "V1":
              result = (calcState.M2! * calcState.V2!) / calcState.M1!;
              setCalcState({
                ...calcState,
                V1: result,
              });
              setResult(`V1 = ${result}`);
              break;

            case "M2":
              result = (calcState.M1! * calcState.V1!) / calcState.V2!;
              setCalcState({
                ...calcState,
                M2: result,
              });
              setResult(`M2 = ${result}`);
              break;

            case "V2":
              result = (calcState.M1! * calcState.V1!) / calcState.M2!;
              setCalcState({
                ...calcState,
                V2: result,
              });
              setResult(`V2 = ${result}`);
              break;
          }
        }
      }
    }
  };

  const handleDropChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    // TODO : Add conversion
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    const data = event.target;

    if (data.value === "") {
      setCalcState({
        ...calcState,
        [data.name]: null,
      });
    } else {
      setCalcState({
        ...calcState,
        [data.name]: data.value,
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculate();
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <div className="flex flex-row items-center">
            <Input
              name="M1"
              value={calcState.M1}
              onInputChange={handleInputChange}
              onDropChange={handleDropChange}
            />

            <div className="mx-5">X</div>

            <Input
              name="V1"
              value={calcState.V1}
              onInputChange={handleInputChange}
              onDropChange={handleDropChange}
            />
          </div>

          <div className="my-6">=</div>

          <div className="flex flex-row items-center">
            <Input
              name="M2"
              value={calcState.M2}
              onInputChange={handleInputChange}
              onDropChange={handleDropChange}
            />

            <div className="mx-5">X</div>

            <Input
              name="V2"
              value={calcState.V2}
              onInputChange={handleInputChange}
              onDropChange={handleDropChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="font-bold py-2 px-4 mt-8 rounded bg-blue-500 text-white hover:bg-blue-700"
        >
          Calculate
        </button>
      </form>

      <p className="mt-8">Result:</p>
      <p className="mt-4">{result}</p>
    </div>
  );
}
