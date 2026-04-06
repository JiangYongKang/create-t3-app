/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoTypeScriptStep() {
  return (
    <Typist cursor={{ show: false }} startDelay={4800} avgTypingDelay={-10000}>
      ? Will you be using JavaScript or TypeScript? (Use arrow keys)
      <br />
      ❯ TypeScript
      <br />
      &nbsp;&nbsp;JavaScript
      <Typist.Backspace count={87} delay={1000} />
      <Typist
        cursor={{ show: false }}
        avgTypingDelay={-10000}
        className="translate-y-[-1.8rem] md:translate-y-[-2.0rem]"
      >
        <span>
          <span>? Will you be using JavaScript or TypeScript?</span>
          <span className="pl-2 text-blue-400">TypeScript</span>
        </span>
      </Typist>
    </Typist>
  );
}
