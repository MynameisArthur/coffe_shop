const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const data = {
        title: "Joe's Coffee House",
        description:
            'Welcome to my Coffee House! I hope you enjoy my broad selection of premium coffee from all over the world.',
    };

    res.render('home', data);
});

module.exports = router;
