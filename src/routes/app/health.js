module.exports = (server) => {

    server.get('/health', async (req, res) => {
        res.status(200).send("it's running!");
    })
    
}