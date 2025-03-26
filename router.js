const express = require('express');

const app = express();
const router = express.Router();

const port = 3000;


router.use((req, res, next) => {
    console.log('Time:', new Date().toISOString());
    next();
});

router.get('/', (req, res) => {
    res.send('Hello World!');
});


router.use('/home/:id', (req, res, next) => {
    console.log('Home ID:', req.params.id);
    next();
}, (req, res) => {
    res.send(`Home Page for ID: ${req.params.id}`);
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
