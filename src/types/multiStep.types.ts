import { BillingInfoSchema } from "../validations/billingInfoSchema";
import { PersonalInfoSchema } from "../validations/personalInfoSchema";
import { ProfesstionalInfoSchema } from "../validations/professtionalInfoSchema";

export type StepFormData = PersonalInfoSchema | BillingInfoSchema | ProfesstionalInfoSchema