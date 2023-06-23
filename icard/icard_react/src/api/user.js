import { BASE_API } from '../utils/constants';


export async function LoginApi(formValue) {
    try {
        // const url = "${BASE_API}/api/auth/login/"  ESTO ESTA MAL EL ENLACE;
        const url = "http://127.0.0.1:8000/api/auth/login/";
        
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValue),
        };

        const response = await fetch(url, params);

        if(response.status !== 200) {
            throw new Error('Usuario o contraseña incorrectos');
        }

        const result = await response.json();

        return result;
        
    } catch (error) {
        throw error
    }
}