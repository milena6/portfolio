import { Page } from "playwright/test"

export function TestPage(page: Page) {
    const input = page.locator('type=text')
    const checkInputButton = page.getByRole('button', { name: 'Validate' })

    return{
        input,
        checkInputButton
    }
}