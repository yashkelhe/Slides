import React, { Suspense } from "react";
import "./App.css";
import Q1 from "./component/Q1";
import Q2 from "./component/Q2";
import Q3 from "./component/Q3";
import Q4 from "./component/Q4";
import Q5 from "./component/Q5";

import FamilyTreeComponent from "./component/Q7_Recursion";
const Q6 = React.lazy(() => import("./component/Q6"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <div>Loading Please Wait....</div>
          </>
        }
      >
        <Q1 />
        <Q2 />
        <Q3 />
        <Q4 />
        <Q5 />
        <Q6 />
        <FamilyTreeComponent />
      </Suspense>
    </>
  );
}

export default App;
