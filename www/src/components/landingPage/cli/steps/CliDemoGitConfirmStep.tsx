/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoGitConfirmStep() {
  return (
    <Typist
      cursor={{ show: false }}
      startDelay={13000}
      avgTypingDelay={-10000}
      className="translate-y-[-9.4rem] text-green-400 sm:translate-y-[-10rem]"
    >
      Sounds good! You can come back and run git init later.
    </Typist>
  );
}
