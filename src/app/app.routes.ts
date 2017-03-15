import {AppComponent} from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
		path:'forgetPwd',
		component:ForgetPwdComponent
	}
];