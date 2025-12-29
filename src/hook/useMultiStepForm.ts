import { useState } from "react";
import billingInfoSchema from "../validations/billingInfoSchema";
import personalInfoSchema from "../validations/personalInfoSchema";
import professtionalInfoSchema from "../validations/professtionalInfoSchema";

export interface Steps {
  key : string,
  component : string
}

export const stepSchema = [
  billingInfoSchema,
  personalInfoSchema,
  professtionalInfoSchema
]

export const steps : Steps[] = [
  {key : "Personal Information" , component : ""}
]

export const useMultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData , setFormData] = useState({});
  const [isSubmitting , setIsSubmitting] = useState(false);

  const isFirstStep = currentStep == 1;
  const isLastStep = currentStep == steps.length;

  const getCurrentStepSchema = () => stepSchema[currentStep]

  const next = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const updateData = (newData) => {
    setFormData((prev) => ({...prev , ...newData}))
  }

  const submitForm = (data) => {
    setIsSubmitting(true)
  }

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({})
    setIsSubmitting(false)
  }

  return {
    step : steps[currentStep],
    currentStep,
    formData,
    next,
    previous,
    updateData,
    submitForm,
    resetForm,
    getCurrentStepSchema
  };
};
