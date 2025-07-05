const fs = require('fs');

const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    if (method === 'GET' && url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!DOCTYPE html><html lang="en">');
        res.write('<body>');
        res.write('<form action="/message" method="post"><input type="text" name="message"/><button type="submit">submit</button> </form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    if (method === 'POST' && url === "/message") {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('./message.txt', parsedBody, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end()
            })
        })
    }
}

module.exports = {requestHandler};

