import { test, expect } from '@playwright/test' 
import { TestPage } from '../pages/testPage';

test.describe('Input validation tests',() => {
    const validValues = ['AAbb00*', 'ABCDEFG', '1234567'];
    for (const value of validValues) {

    test(`testing happy path with ${value}`, async ({page}) => {
    await page.goto('/https://testpages.eviltester.com/styled/apps/7charval/simple7charvalidation.html')
    const testPage = TestPage(page)
    await testPage.input.fill(value)

})
}

const invalidValues = ['AAbb00*8', 'ABCDEFG#', '123456 7', '', 'QWert6'];
for (const value of invalidValues) {
  test(`should give  with ${value}`, async () => {

})
}
})
