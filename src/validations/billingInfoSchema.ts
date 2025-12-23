import * as yup from "yup";

const billingInfoSchema = yup.object({
    cardNumber : yup.number().min(16,"Invalid card number").max(16,"Invalid card number"),
    cardHolderName : yup.string().min(1,"Card Holder Name is required"),
    expiryDate : yup.string().min(4,"Invalid expiry date"),
    cvv : yup.string().min(3,"Invalid cvv").max(4,"Invalid cvv")
})

export default billingInfoSchema

export type BillingInfoSchema = yup.InferType<typeof billingInfoSchema>