import React, { useState } from "react";

type FamilyMember = {
  name: string;
  age: number;
  children?: FamilyMember[];
};

const familyTree: FamilyMember = {
  name: "John",
  age: 90,
  children: [
    {
      name: "Mary",
      age: 60,
    },
    {
      name: "Arthur",
      age: 60,
      children: [
        {
          name: "Lily",
          age: 35,
          children: [
            { name: "Hank", age: 60 },
            { name: "Henry", age: 57 },
          ],
        },
      ],
    },
  ],
};

export function Q7_Recursion({ familyTree }: { familyTree: FamilyMember }) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ paddingLeft: 10 }}>
      <span onClick={expand} style={{ cursor: "pointer", fontWeight: "bold" }}>
        {familyTree.name} ({familyTree.age} years old)
      </span>
      {isVisible &&
        familyTree.children?.map((child, index) => (
          <Q7_Recursion key={index} familyTree={child} />
        ))}
    </div>
  );
}

export default function FamilyTreeComponent() {
  return (
    <div>
      <h2>Family Tree</h2>
      <Q7_Recursion familyTree={familyTree} />
    </div>
  );
}
