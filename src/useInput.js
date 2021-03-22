import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  /*
   * We must return something so here we return an array. Inside the array, we need 1) an object with
   * the value 2) what we want to happen when the value changes
   * Next you need a cleanup function ie. clears/resets the value to the initialValue
   **/

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    // Cleanup function - Resets the value
    () => setValue(initialValue),
  ];
}
