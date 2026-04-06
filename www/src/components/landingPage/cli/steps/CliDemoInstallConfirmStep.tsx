/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoInstallConfirmStep() {
  return (
    <Typist
      cursor={{ show: false }}
      startDelay={16000}
      avgTypingDelay={-10000}
      className="translate-y-[-9.4rem] text-green-400 sm:translate-y-[-10rem]"
    >
      Alright. We&apos;ll install the dependencies for you!
    </Typist>
  );
}
