import { Page } from '@playwright/test';
import { Iyoutube } from '../interface/ui.interface';
import { searchBar, url } from '../userInterfaces/homeUI';

export class youtubePage implements Iyoutube{
    private page: Page;
    constructor(page: Page){
        this.page=page;
    }

    async goto(): Promise<void> {
        await this.page.goto(url);
    }

    async enterData(locator: string,data: string): Promise<void> {
        await this.page.fill(locator,data);
    }
    
    async search(): Promise<void> {
        await this.page.getByPlaceholder('Buscar').press('Enter');//hacerlo con ENTER
    }

    async doSearch(): Promise<void> {
        await this.enterData(searchBar, "beggin");
        await this.search();
    }
}