import { test, expect, Page } from '@playwright/test';
import { youtubePage } from '../youtube/searchSong/pageObject/youtubePage';



test('find song', async ({ page }) => {
  let ytpage: youtubePage ;
  ytpage = new youtubePage(page);
  await ytpage.goto();
  await ytpage.doSearch();
  expect(page.getByTitle("Måneskin - Beggin' (Lyrics/Testo)"))
    .toHaveText("Måneskin - Beggin' (Lyrics/Testo)");//atrapar el titulo y hacer la validacion depues del click

  
  
});

 



