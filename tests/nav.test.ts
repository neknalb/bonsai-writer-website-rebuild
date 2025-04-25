import { expect, test } from '@playwright/test'

test('home page shows nav with home and whats new', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('button', { name: 'Home' })).toBeVisible()
	await expect(page.getByRole('button', { name: "What's new" })).toBeVisible()
})
