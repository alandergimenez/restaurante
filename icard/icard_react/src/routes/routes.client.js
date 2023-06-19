import { ClientLayout } from '../layouts';
import { Error404 } from '../pages';
import { Home } from '../pages/Client';


const routesClient = [
    {
        path: '/',
        layout: ClientLayout,
        componente: Home,
        exact: true,
    },
    {
        layout: ClientLayout,
        componente: Error404,
    }
];
export default routesClient;