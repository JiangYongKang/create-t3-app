/** @jsxImportSource react */
import { CliDemoGitConfirmStep } from "./steps/CliDemoGitConfirmStep";
import { CliDemoGitStep } from "./steps/CliDemoGitStep";
import { CliDemoInstallConfirmStep } from "./steps/CliDemoInstallConfirmStep";
import { CliDemoInstallStep } from "./steps/CliDemoInstallStep";
import { CliDemoPackagesSelectedStep } from "./steps/CliDemoPackagesSelectedStep";
import { CliDemoPackagesStep } from "./steps/CliDemoPackagesStep";
import { CliDemoPackagesVisualStep } from "./steps/CliDemoPackagesVisualStep";
import { CliDemoProjectNameStep } from "./steps/CliDemoProjectNameStep";
import { CliDemoTypeScriptStep } from "./steps/CliDemoTypeScriptStep";

export function CliDemoSteps() {
  return (
    <>
      <CliDemoProjectNameStep />
      <CliDemoTypeScriptStep />
      <CliDemoPackagesStep />
      <CliDemoPackagesSelectedStep />
      <CliDemoPackagesVisualStep />
      <CliDemoGitStep />
      <CliDemoGitConfirmStep />
      <CliDemoInstallStep />
      <CliDemoInstallConfirmStep />
    </>
  );
}
