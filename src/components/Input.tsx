import React, { ChangeEvent, FC } from "react";

const Input: FC<{
  name: string;
  value: number | null;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDropChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="m1">{props.name}</label>
      <div className="flex flex-row items-center">
        <input
          className="appearance-none block w-24 bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
          id={props.name}
          name={props.name}
          value={props.value || ""}
          type="text"
          placeholder={props.name}
          onChange={props.onInputChange}
        />

        {/* <div className="inline-block relative w-48">
          <select
            name={props.name}
            onChange={props.onDropChange}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:shadow-outline"
          >
            <option>Milli</option>
            <option>Micro</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Input;
