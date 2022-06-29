import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/page/Home';
import Following from '~/page/Following';
import profile from '~/page/profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import Live from '~/page/Live';

//public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },

    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },

    { path: config.routes.profile, component: profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
