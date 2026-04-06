/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoPackagesSelectedStep() {
  return (
    <Typist
      cursor={{ show: false }}
      startDelay={10000}
      avgTypingDelay={-10000}
      className="translate-y-[-5.6rem] sm:translate-y-[-6.0rem]"
    >
      <span>? Which packages would you like to enable?</span>
      <span className="pl-1 text-blue-400">
        nextAuth, prisma, tailwind, trpc
      </span>
    </Typist>
  );
}
