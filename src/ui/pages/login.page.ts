import{Page,Locator} from '@playwright/test';
import { BasePage } from './base.page';
import { env } from '@config/env';
export class LoginPage extends BasePage{
    readonly usernameInput:Locator;
    readonly passwordInput :Locator;
    readonly loginButton:Locator;
    readonly flashMessage:Locator;
    
    constructor(page:Page){
        super(page);
        this.usernameInput =page.getByLabel('Username')
        this.passwordInput =page.getByLabel('Password');
        this.loginButton = page.getByRole('button',{name:'Login'})
        this.flashMessage =page.locator('#flash');

    }

    async open(){
        await this.page.goto(`${env.UI_BASE_URL}/login`);
    }
    async login(username:string,password:string){

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async getFlashMessage(){
        await this.flashMessage.waitFor({state:'visible'})
        return await this.flashMessage.textContent();
    }
}