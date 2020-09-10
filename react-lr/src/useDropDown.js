import React, { useState } from "react";

export default function useDropDown(label, defautState, options) {
  const [state, setState] = useState(defautState);
  const id = `use-dropdown-${label.replace(" ", "")}`;

  const Dropdown = () => (
    <label htmlFor="{id}">
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
}
