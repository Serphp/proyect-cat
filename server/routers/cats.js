const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('List of cats');
})

// router.post('/', (req, res) => {
//     res.send('Add a new cat');
// })

// router.get('/:id', (req, res) => {
//     res.send(`Details of cats ${req.params.id}`);
// });

module.exports = router;