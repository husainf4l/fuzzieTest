import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          description="Creating a tet workflow"
          id="e2345edsa"
          name="Automation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
