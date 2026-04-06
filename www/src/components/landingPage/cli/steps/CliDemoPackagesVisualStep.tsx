/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoPackagesVisualStep() {
  return (
    <Typist
      cursor={{ show: false }}
      avgTypingDelay={-20000}
      className="translate-y-[-4.6rem] sm:translate-y-[-5.0rem]"
      startDelay={8700}
    >
      <span className="text-blue-400">❯</span>
      <span className="text-blue-400">◉ nextAuth</span>
      <span className="text-blue-400">◉ better-auth</span>
      <br />
      &nbsp;◉ prisma
      <br />
      &nbsp;◉ tailwind
      <br />
      &nbsp;◉ trpc
      <br />
      <Typist.Delay ms={1000} />
      <Typist.Backspace count={50} />
    </Typist>
  );
}
