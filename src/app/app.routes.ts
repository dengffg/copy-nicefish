import {AppComponent} from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },{
		path:'home',
		loadChildren:'./home/home.module#HomeModule'
	},{
		path:'posts',
		loadChildren:'./home/home.module#HomeModule'
	},
    {
		path:'post',
		loadChildren:'./post/post.module#PostModule'
	},
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
		path:'forgetPwd',
		component:ForgetPwdComponent
	},
    {
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];