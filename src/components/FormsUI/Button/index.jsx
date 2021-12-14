import { useFormikContext } from 'formik'
import React from 'react'
import {Button} from '@mui/material'
export default function ButtonWrapper({
    children,
    ...otherProps
}) {
    const { submitForm } = useFormikContext();

    const handleSubmit =()=>{
     submitForm();
    }
   
    const configButton = {
        variant: 'contained',
        color: 'primary',

        onClick: handleSubmit,
    }

    return (
        <div>
              <Button {...configButton}>{children}</Button>
        </div>
    )
}
