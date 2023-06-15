import { ClientLayout } from '../pages/Client';
import { Error404 } from '../pages';
import { Home } from '../pages/Client';


const routesClient = [
    {
        path: '/',
        layout: ClientLayout,
        componente: Home,
        exact: true,
    }
]
export default routesClient;