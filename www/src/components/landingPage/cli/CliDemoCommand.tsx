/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoCommand() {
  return (
    <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
      npm create t3-app@latest
      <Typist.Delay ms={1250} />
    </Typist>
  );
}
