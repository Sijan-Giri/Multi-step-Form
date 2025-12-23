import * as yup from 'yup'

const professtionalInfoSchema = yup.object({
    company : yup.string()
    .min(1,"Company Name is required"),
    position : yup.string()
    .min(1,"Position is required"),
    experience : yup.string().min(1,"Experience is required"),
    industry : yup.string().min(1,"Industry name is required")
})

export default professtionalInfoSchema

export type ProfesstionalInfoSchema = yup.InferType<typeof professtionalInfoSchema>
