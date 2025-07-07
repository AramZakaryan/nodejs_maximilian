exports.getError404 = (req, res) => {
    res.render('404', {
        path: undefined,
        pageTitle: "404 Page Not Found"
    });
}
