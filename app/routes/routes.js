exports.index = (req, res) => {
    res.render('index',{
        'title': 'Electron Demo',
        'headTitle': 'The Demo'
    })
};