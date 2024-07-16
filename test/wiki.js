module.exports = {
  'Wiki links': function (browser) {
    const expectedLinks = 606;
    browser
      .url('http://en.wikipedia.org/wiki/Wiki')
      .elements('css selector', '[href^="/wiki/"]', function (links) {
        let actualLinks = links.value.length;
        browser.assert.ok(actualLinks == expectedLinks,
          `Wiki links found: ${actualLinks} of ${expectedLinks}`);
        browser.assert.equal(actualLinks, expectedLinks,
          `Wiki links found: ${actualLinks} of ${expectedLinks}`);
        // console.log('Found', links.value.length, 'Wiki links.');
      })
      browser.expect.elements('[href^="/wiki/"]').count.to.equal(expectedLinks);
      browser.end();
  }
}