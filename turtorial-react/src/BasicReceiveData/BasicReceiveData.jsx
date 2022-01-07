import { useEffect, useState } from "react";
import * as axios from "axios";
export default function BasicReceiveData() {
  const [name, setName] = useState("");
  useEffect(() => {
    const handleData = async () => {
      const dataHandle = await axios.default.get("http://localhost:4000");
      setName(dataHandle.data.data.data.name);
    };
    handleData();
  });
  return (
    <div>
      <p>Xin chào {name} </p>
    </div>
  );
}
