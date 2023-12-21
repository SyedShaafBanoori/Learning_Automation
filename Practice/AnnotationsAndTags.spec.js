import {
    test,
    expect,
    chromium
} from '@playwright/test';

let browser;
let page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
})

test.skip('@smoke Skipping Test', async () => {
    //This test will be skippped
})

test.fail('@smoke Failing Test', async () => {
    //This test will be failed
})

test.fixme('@smoke Fixing Test', async () => {
    //This test will be fixed
})

test.slow('@smoke Slowing Test', async () => {
    //This test will be slowed
})