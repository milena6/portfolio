import { expect, Page } from '@playwright/test'
import { IntroPage } from '../introPage'
import { TestPage } from '../testPage'

export async function performInputValidationTest(page: Page, value: string) {
  await page.goto('/')
  const introPage = IntroPage(page)
  await introPage.chartLink.click()
  const testPage = TestPage(page)
  await testPage.input.fill(value)
  await testPage.checkInputButton.click()
}
