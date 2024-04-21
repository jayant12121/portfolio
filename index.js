
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__portfolio, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
