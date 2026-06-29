import{test,expect} from '@fixtures/index';


test.describe('Login Page',()=>{
    test("logs in with valid Credentials",async({loginPage})=>{
        //const loginPage = new LoginPage(page);
        await loginPage.open()
        await loginPage.login('tomsmith','SuperSecretPassword!');
        const message = await loginPage.getFlashMessage()
        expect(message).toContain('You logged into a secure area');

    });
    test('shows error with invalid credentials',async({loginPage})=>{
        //const loginPage = new LoginPage(page);
        await loginPage.open()
        await loginPage.login('wronguser','wrongpassword');
        const message = await loginPage.getFlashMessage()
        expect(message).toContain('Your username is invalid!'); 

    })
})