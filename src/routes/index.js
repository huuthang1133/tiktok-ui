// Layouts
import { HeaderOnly } from '~/components/Layout';

import Following from '~/components/GlobalStyles/pages/Following';
import Home from '~/components/GlobalStyles/pages/Home';
import Profile from '~/components/GlobalStyles/pages/Profile';
import Upload from '~/components/GlobalStyles/pages/Upload';

// Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
