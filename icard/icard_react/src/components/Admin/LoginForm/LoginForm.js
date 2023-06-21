import React from "react";
import { Button, Form } from 'semantic-ui-react';
import './LoginForm.scss';

export function LoginForm() {
    return (
        <div>
            <h1>Login Form</h1>
            <form className="login-form-admin">
                <Form.Input name = 'email' placeholder='Correo electrónico' />
                <Form.Input name = 'password' type='password' placeholder='Contraseña' />
                <Button type="submit" content='Iniciar sesión' primary fluid />
            </form>
        </div>
    )
}