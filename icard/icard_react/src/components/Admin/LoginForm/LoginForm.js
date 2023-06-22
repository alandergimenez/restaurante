import React from "react";
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginForm.scss';

export function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
    });

    return (
        <div>
            <h1>Login Form</h1>
            <form className="login-form-admin">
                <Form.Input name = 'email' placeholder='Correo electrónico' value={formik.values.email} onChange={formik.handleChange} />
                <Form.Input name = 'password' type='password' placeholder='Contraseña' value={formik.values.password} onChange={formik.handleChange} />
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