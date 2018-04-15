const path = require('path')
const Validator = require(path.resolve(__dirname, '../../../dist/validator'))

class PostValidator {
    static checkBody(req, res, next) {
        const body = req.body
        console.log(body)
        const singleStep = !!req.query.singleStep
        const rules = {
            title: {
                require: '',
                minLength: {
                    rule: 2
                }
            },
            author: {
                require: '',
                chsDash: ''
            },
            url: {
                url: ''
            },
            order: {
                require: '',
                integer: '',
                min: {
                    rule: 1
                }
            },
            license: {
                require: '',
                in: {
                    rule: ['MIT', 'ISC']
                }
            },
            //deep
            'count.views': {
                require: '',
                integer: '',
                min: {
                    rule: 1
                }
            },
            tags: {
                array: '',
            },
        }

        let result = Validator.check(rules, body, singleStep)
        if (!result.status) {
            let _res = {
                code: 422
            }
            if (singleStep) {
                _res.error = result.msg
            } else {
                _res.error = result.fields
            }

            return res.json(_res)
        }
        next()

    }
}

module.exports = PostValidator