const { Builder, Browser, WebDriver, By } = require('selenium-webdriver')
const { describe, it } = require('mocha')
const assert = require('node:assert')

describe('Deve testar a lojinha web', () => {
    describe('Deve testar a tela de login', async () => {
        it('Deve fazer login com sucesso', async () => {
            const navegador = await new Builder().forBrowser(Browser.CHROME).build()
            const baseUrl = 'http://165.227.93.41/lojinha-web/v2/'
            await navegador.get(baseUrl)
            await navegador.findElement(By.id('usuario')).sendKeys("admin");
            await navegador.findElement(By.name('senha')).sendKeys("admin");
            await navegador.findElement(By.css('[type="submit"]')).click();
            const mensagemBoasvindas = await navegador.findElement(By.id('nav-mobile')).getAttribute('textContent')
            assert.ok(mensagemBoasvindas.includes('Boas vindas, admin!'))
            navegador.quit()
        })
    })
})