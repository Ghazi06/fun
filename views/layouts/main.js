import AppController from '../../src/app-controller'


app.get('/', async (req, res) => {
    const html = await new AppController(req, res).index()
    res.send(html)
})