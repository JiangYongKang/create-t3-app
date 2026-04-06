/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoInstallStep() {
  return (
    <Typist
      cursor={{ show: false }}
      startDelay={14500}
      avgTypingDelay={-10000}
      className="translate-y-[-9.4rem] sm:translate-y-[-10rem]"
    >
      <div>
        <span className="whitespace">
          ? Would you like us to run npm install? (Y/n)
        </span>
        <Typist.Delay ms={1000} />
        <Typist
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
          className="inline pl-2 text-blue-400"
          avgTypingDelay={-10000}
        >
          y
          <Typist.Backspace count={1} delay={500} />
          <span className="text-blue-400">Yes</span>
        </Typist>
      </div>
    </Typist>
  );
}
