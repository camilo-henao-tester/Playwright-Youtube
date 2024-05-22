import { test, expect, Page } from '@playwright/test';
import { youtubePage } from '../youtube/searchSong/pageObject/youtubePage';
import { searchBar } from '../youtube/searchSong/userInterfaces/homeUI';
let ytpage: youtubePage ;

test('find song', async ({ page }) => {
  ytpage = new youtubePage(page);
  await ytpage.goto();
  await ytpage.enterData(searchBar, 'beggin');
  await ytpage.doSearch();
  
});

