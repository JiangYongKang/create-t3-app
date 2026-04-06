/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoPackagesStep() {
  return (
    <Typist
      cursor={{ show: false }}
      startDelay={6300}
      avgTypingDelay={-10000}
      className="translate-y-[-1.8rem] text-green-400 md:translate-y-[-2.0rem]"
    >
      Good choice! Using TypeScript!
      <br />
      <Typist.Delay ms={1000} />
      <span className="text-white">{`? Which packages would you like to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection, and
<enter> to proceed)`}</span>
      <br />
      <span className="text-blue-400">❯</span>
      <span className="text-blue-400">◯ nextAuth</span>
      <br />
      <span className="text-white">&nbsp;◯ prisma</span>
      <br />
      <span className="text-white">&nbsp;◯ tailwind</span>
      <br />
      <span className="text-white">&nbsp;◯ trpc</span>
      <Typist.Delay ms={900} />
      <Typist.Backspace count={38} />
      <Typist.Delay ms={1200} />
      <Typist.Backspace count={136} />
      <span></span>
    </Typist>
  );
}
