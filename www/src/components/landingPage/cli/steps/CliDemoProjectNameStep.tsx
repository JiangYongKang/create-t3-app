/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoProjectNameStep() {
  return (
    <Typist
      startDelay={2100}
      className=""
      cursor={{ show: false }}
      avgTypingDelay={-500}
    >
      <div>
        ? What will your project be called? (my-t3-app)
        <Typist.Delay ms={500} />
        <Typist
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
          avgTypingDelay={50}
          className="inline pl-1 text-blue-400"
        >
          my-t3-app
        </Typist>
      </div>
      <br />
    </Typist>
  );
}
