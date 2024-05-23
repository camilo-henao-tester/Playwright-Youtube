import {  Page } from '@playwright/test';
import { Iyoutube } from '../interface/ui.interface';
import { dataVideo, searchBar, searchIcon, lst_titles, url, txt_title } from '../userInterfaces/homeUI';
import { match } from 'assert';

export class youtubePage implements Iyoutube{
    private page: Page;
    constructor(page: Page){
        this.page=page;
    }

    async goto(): Promise<void> {
        await this.page.goto(url);
    }

    async enterData(locator: string, data: string): Promise<void> {
        await this.page.click(locator);
        await this.page.fill(locator,data);
    }
    
    async search(): Promise<void> {
        await this.page.click(searchIcon);
        await this.page.waitForSelector('ytd-video-renderer');
    }

     async randomSong(): Promise<string | null> {
         const videos = await this.page.$$(lst_titles);
         const video = videos[Math.floor(Math.random() * videos.length)];
         const title = await this.page.textContent(txt_title);
         await video.click();
         await this.page.waitForSelector(dataVideo);

         return title;
    }

    async doSearch(): Promise<void> {
        await this.enterData(searchBar, "Beggin");
        await this.search();
    }

    
}