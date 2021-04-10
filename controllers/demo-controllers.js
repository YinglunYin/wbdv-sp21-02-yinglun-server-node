module.exports = (app) => {

    const add = (req, res) => {
        const a = parseInt(req.params['paramA'])
        const b = parseInt(req.params['paramB'])
        res.send(`${a + b}`)
    }

    app.get('/add/:paramA/:paramB', add)

// another way to parsing
    const subtract = (req, res) => {
        const a = parseInt(req.query['x']);
        const b = parseInt(req.query['y']);
        const c = a - b;
        res.send(`${c}`)

    }

    app.get('/subtract', subtract)

    app.get('/hello', (req, res) =>		// respond HTTP GET
        res.send('hello world'));
}