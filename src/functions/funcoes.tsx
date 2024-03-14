// function para mudar type do input e show and hide password
import { useState } from "react"

export const HandleClick = () => {
  const [statEye, setState] = useState(false); // statEye é a variavel e

  const toggleVisibility = () => {
    setState(!statEye);
  };

  return { statEye, toggleVisibility };
}

