/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoGitStep() {
  return (
    <Typist
      cursor={{ show: false }}
      startDelay={10500}
      avgTypingDelay={-10000}
      className="translate-y-[-9.4rem] sm:translate-y-[-10rem]"
    >
      <div className="flex whitespace-nowrap">
        <span>? Initialize a new git repository? (Y/n)</span>
        <Typist.Delay ms={1000} />
        <Typist
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
          className="pl-2 text-blue-400"
        >
          n
        </Typist>
        <Typist.Delay ms={1500} />
        <Typist.Backspace count={1} />
        <span className="text-blue-400">No</span>
      </div>
    </Typist>
  );
}
