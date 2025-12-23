import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    step : steps[currentStep],
    currentStep,
    next,
    previous,
    goTo,
  };
};
