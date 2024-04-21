
const express = require('express')
const app = express()
const port = 3000

app.get('/index', (req, res) => {
    res.sendFile(path.join( 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
