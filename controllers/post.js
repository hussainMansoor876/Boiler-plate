const { Users, Selectors } = require('../model')

const addSelectors = (req, res) => {
    const { body } = req
    let selector = new Selectors(body)

    selector.save()
        .then(() => {
            Users.findByIdAndUpdate({ _id: selector.userId }, { $push: { selectors: selector } })
                .then(() => {
                    return res.send({ success: true, message: 'Successfully data added' })
                })
                .catch((err) => res.send({ success: false, message: 'Something went Wrong!', err }))
        })
        .catch((err) => res.send({ success: true, message: 'Something went Wrong!', err }))
}

const updateSettings = (req, res) => {
    const { body } = req

    Users.findByIdAndUpdate({ _id: body.userId }, body, { new: true, fields: { password: 0 } })
        .then((user) => {
            return res.send({ success: true, message: 'Successfully data added', user })
        })
        .catch((err) => res.send({ success: false, message: 'Something went Wrong!', err }))
}

module.exports = {
    addSelectors,
    updateSettings
}