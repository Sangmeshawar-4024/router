const express = require('express');

const app = express();
const router = express.Router();

const port = 3001;

// Middleware to check for 'x-auth' header
router.use((req, res, next) => {
    if (!req.headers['x-auth']) {
        return res.sendStatus(401); // Send 401 Unauthorized if x-auth header is missing
    }
    next();
});

// Route inside the router
router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Use the router for `/student`
app.use('/student', router);

// Fallback route for unauthorized access
app.use('/student', (req, res) => {
    res.sendStatus(401);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



