/** @jsxImportSource react */
import { CliDemoCommand } from "./CliDemoCommand";
import { CliDemoHeader } from "./CliDemoHeader";
import { CliDemoLogo } from "./CliDemoLogo";
import { CliDemoSteps } from "./CliDemoSteps";

export default function CodeCard() {
  return (
    <div
      className="mx-auto w-full overflow-hidden rounded-lg sm:w-[600px]"
      aria-hidden="true"
    >
      <div className="inverse-toggle h-[300px] overflow-hidden rounded-lg border border-t3-purple-200/20 bg-white/10 px-1 pb-6 pt-4 font-mono text-[10px] leading-normal text-t3-purple-50 subpixel-antialiased shadow-lg transition-all sm:h-[400px] sm:px-2 sm:text-xs md:px-5">
        <CliDemoHeader />
        <CliDemoCommand />
        <CliDemoLogo />
        <CliDemoSteps />
      </div>
    </div>
  );
}
