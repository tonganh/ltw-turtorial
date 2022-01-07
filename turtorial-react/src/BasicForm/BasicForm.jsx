import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as axios from "axios";
export default function BasicForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async () => {
          await axios.default.post("http://localhost:4000", { name });
        }}
      >
        <label>
          Nhập tên của bạn vào đây:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </form>
      <button
        type="submit"
        onClick={async () => {
          await axios.default.post("http://localhost:4000", { data: { name } });
          navigate("/basic-receive");
        }}
      >
        Send
      </button>
    </div>
  );
}
