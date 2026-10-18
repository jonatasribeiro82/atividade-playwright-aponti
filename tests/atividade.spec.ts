import { test, expect } from '@playwright/test';

test('Atividade completa: Fill, Submit, Click e Upload', async ({ page }) => {
    
    // 1. Testando Fill e Submit (Formulário de Login)
    await page.goto('https://the-internet.herokuapp.com/login');

    // FILL: Preenchendo os campos de usuário e senha
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    // CLICK / SUBMIT: Clicando no botão do formulário para submeter
    await page.locator('button[type="submit"]').click();

    // Validação para garantir que o Submit funcionou
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

    // 2. Testando Upload de arquivo
    await page.goto('https://the-internet.herokuapp.com/upload');

    // UPLOAD: Buscando o arquivo que criamos na raiz do projeto
    await page.locator('#file-upload').setInputFiles('playwright.pdf');

    // CLICK: Clicando no botão para enviar o arquivo
    await page.locator('#file-submit').click();

    // Validação para garantir que o upload foi feito com sucesso
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});