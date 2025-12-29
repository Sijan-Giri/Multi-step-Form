import { useMultiStepForm } from "../../hook/useMultiStepForm"
import { Card, CardContent, CardHeader } from "../ui/card"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { StepFormData } from "../../types/multiStep.types"

const MultiStepForm = () => {

  const {currentStep , formData , getCurrentStepSchema} = useMultiStepForm();
  const {handleSubmit} = useForm<StepFormData>({
    resolver : yupResolver(getCurrentStepSchema()),
    mode : 'onChange',
    defaultValues : formData
  })
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
    <Card className="w-full max-w-2xl">
        <CardHeader>Progress</CardHeader>
        <CardContent className="space-y-6">
            <p>Card Content</p>
        </CardContent>
    </Card>
    </div>
    </>
  )
}

export default MultiStepForm