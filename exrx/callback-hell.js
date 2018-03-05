login(() => {
  // do login stuff
  scrapeIndexPage(() => {
    // do scraping of data to some array
    scrapeAllPagesFromAnArray(() => {
      for(page of pages) {
        // scrape single page
        handleScrapedData(() => {
          // saving scrape data to some database
          // but I'm called X times so how to know that all X calls have finished so we can move on?
        })
      }
    }
  }
}

