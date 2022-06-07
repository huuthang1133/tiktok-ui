import config from '~/configs';
// Layouts
import { HeaderOnly } from '~/layouts';

import Following from '~/components/GlobalStyles/pages/Following';
import Home from '~/components/GlobalStyles/pages/Home';
import Profile from '~/components/GlobalStyles/pages/Profile';
import Upload from '~/components/GlobalStyles/pages/Upload';
import Search from '~/layouts/components/Search';

// Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
