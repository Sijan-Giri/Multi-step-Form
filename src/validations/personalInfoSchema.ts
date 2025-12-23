import * as yup from "yup"

const personalInfoSchema = yup.object({
    firstName : yup.string().min(1,"First Name is required"),
    lastName : yup.string().min(1,"Last Name is required"),
    email : yup.string().email("Invalid Email"),
    phoneNumber : yup.number().min(10,"Phone number is too short")
})

export default personalInfoSchema

export type PersonalInfoSchema = yup.InferType<typeof personalInfoSchema>
