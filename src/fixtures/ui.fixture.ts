import{test as base} from '@playwright/test';
import{LoginPage} from '@ui/pages/login.page';

type UIFixtures ={
    loginPage:LoginPage;
}

export const test = base.extend<UIFixtures>({
    loginPage:async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage)
    }
})