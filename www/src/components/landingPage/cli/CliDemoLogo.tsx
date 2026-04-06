/** @jsxImportSource react */
import Typist from "react-typist";

export function CliDemoLogo() {
  return (
    <Typist
      className="leading-1 translate-y-[-0.2rem] bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text font-mono text-[7px] text-transparent sm:text-sm md:translate-y-[-0.4rem]"
      cursor={{ show: false }}
      avgTypingDelay={-500}
    >
      <Typist.Delay ms={2000} />
      &nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;___&nbsp;___&nbsp;&nbsp;&nbsp;__&nbsp;_____&nbsp;___&nbsp;&nbsp;&nbsp;_____&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;___&nbsp;___&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;/&nbsp;__|&nbsp;_&nbsp;\&nbsp;__|&nbsp;/&nbsp;&nbsp;\_&nbsp;&nbsp;&nbsp;_|&nbsp;__|&nbsp;|_&nbsp;&nbsp;&nbsp;_|__&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\&nbsp;|&nbsp;_&nbsp;\&nbsp;_&nbsp;\&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;|&nbsp;(__|&nbsp;&nbsp;&nbsp;/&nbsp;_|&nbsp;/&nbsp;/\&nbsp;\|&nbsp;|&nbsp;|&nbsp;_|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;|_&nbsp;\&nbsp;&nbsp;/&nbsp;/\&nbsp;\|&nbsp;&nbsp;_/&nbsp;&nbsp;_/&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;\___|_|_\___|_/¯¯\_\_|&nbsp;|___|&nbsp;&nbsp;&nbsp;|_|&nbsp;|___/&nbsp;/_/¯¯\_\_|&nbsp;|_|&nbsp;&nbsp;
      <br />
    </Typist>
  );
}
