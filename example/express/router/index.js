const PostValidator = require('../validate/post')


module.exports = router => {
    router.post('/post', PostValidator.checkBody, (req, res, next) => {
        return res.json({
            code: 200,
            data: req.body
        })
    })

    return router
}