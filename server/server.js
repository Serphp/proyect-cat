const app = require("./app");

// Server running
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`
    __________________Server running on port ${port}__________________`)
});