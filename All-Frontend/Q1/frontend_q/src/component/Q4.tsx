import { useRef } from "react";

function Q4() {
  const name = useRef<HTMLInputElement | null>(null);
  const age = useRef<HTMLInputElement | null>(null);
  const submitt = () => {
    console.log(name.current?.value);
    console.log(age.current?.value);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <input type="text" ref={name} placeholder="Enter name" />
      <input type="text" ref={age} placeholder="Enter age" />
      <input type="text" placeholder="Another input" />
      <button type="button" onClick={submitt}>
        submit
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Q4;
