import { Page } from '@playwright/test';
import { Iyoutube } from '../interface/ui.interface';
import { searchBar, searchIcon, titles, url } from '../userInterfaces/homeUI';
import { match } from 'assert';

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
        //await this.page.getByPlaceholder('Buscar').press('Enter');//hacerlo con ENTER no funciono
        await this.page.click(searchIcon);
        await this.page.waitForSelector('ytd-video-renderer');
    }

     async randomSong(): Promise<void> {
        const videos = await this.page.$$(titles);
        const video = videos[Math.floor(Math.random() * videos.length)];
        await video.click();

    }



    async doSearch(): Promise<void> {
        await this.enterData(searchBar, "Beggin");
        await this.search();
        await this.randomSong();
        
    }
    
}