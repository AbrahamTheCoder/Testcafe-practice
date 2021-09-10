import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS, URLS } from '../data/Constants'

fixture('Login Feature Test')
    .page `${URLS.LOGIN_URL}`

test('As a standar user, I should be able to log in successfully when I provide valid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDAD_USER.USERNAME, CREDENTIALS.STANDAD_USER.PASSWORD)
    await t.expect(productsPage.mainTitle.exists).ok()
})
