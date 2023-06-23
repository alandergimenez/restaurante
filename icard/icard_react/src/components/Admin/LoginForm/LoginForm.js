import React from "react";
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast} from 'react-toastify';
import { LoginApi } from '../../../api/user';
import './LoginForm.scss';

export function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
           
            try {

                const response = await LoginApi(formValue);
                const { access } = response;
                console.log(access);
                
            } catch (error) {
                toast.error(error.message);
            }

        },
    });

    return (
        <div>
            <h1>Login Form</h1>
            <form className="login-form-admin" onSubmit={formik.handleSubmit}>

                <Form.Input 
                name = 'email' 
                placeholder='Correo electrónico' 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                error={formik.errors.email}
                />

                <Form.Input 
                name = 'password' 
                type='password' placeholder='Contraseña' 
                value={formik.values.password} 
                onChange={formik.handleChange} 
                error={formik.errors.password}
                />

                <Button type="submit" content='Iniciar sesión' primary fluid />
            </form>
        </div>
    )
}

function initialValues(){
    return {
        name: '',
        password: '',
    };
}

function validationSchema(){
    return {
        email: Yup.string().email('Correo Invalido').required(true),
        password: Yup.string().required(true)
    }
}