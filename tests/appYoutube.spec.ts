import { test, expect, Page } from '@playwright/test';
import { youtubePage } from '../youtube/searchSong/pageObject/youtubePage';
import { txt_title2 } from '../youtube/searchSong/userInterfaces/homeUI';



test('find song', async ({ page }) => {
  let ytpage: youtubePage;
  ytpage = new youtubePage(page);
  await ytpage.goto();
  await ytpage.doSearch();
  const title1 = await ytpage.randomSong();
  expect(await page.textContent(txt_title2)).toEqual(title1);
  
});

 



