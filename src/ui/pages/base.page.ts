import { Page } from '@playwright/test';

export class BasePage{
    constructor(protected page:Page){

    }
    async goto(url:string){
        await this.page.goto(url)
    }
    async waitForLoad(){
        await this.page.waitForLoadState('domcontentloaded') 
    }

}
/*Why this exists: every page object you ever write will extend this.
 Right now it just has goto and waitForLoad, but later you'll add shared things here 
 — like a method to check for a loading spinner, or grab the page title — 
 instead of repeating that logic in every single page class.*/