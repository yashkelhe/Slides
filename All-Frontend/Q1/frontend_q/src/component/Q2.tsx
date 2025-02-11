import { useState } from "react";

function Q2() {
  const [names, setNames] = useState<string | undefined>();

  return (
    <div>
      <input
        type="input"
        alt="name"
        placeholder="name"
        onChange={(event) => setNames(event.target.value)}
      />

      <Greeting props={names} />
    </div>
  );
}

function Greeting({ props }: { props: string | undefined }) {
  return <div>hello from {props}</div>;
}
export default Q2;
