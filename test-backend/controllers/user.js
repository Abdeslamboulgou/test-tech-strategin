const User = require('../models/usersList');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password : hash
        });
        user.save()
        .then(() => res.status(201).json({ message : 'User create ! '}))
        .catch(error => res.status(500).json( {error }));
    })
    .catch(error => res.status(500).json( { error }))
}

exports.logIn = (req, res, next) => {
    User.findOne({ email : req.body.email })
    .then(user => {
        if (!user) {
            res.status(401).json({ error : 'User not found ! '});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                res.status(401).json({ error : 'Password incorrect ! '});
            }
            res.status(200).json({ 
                userId : user._id,
                token: jwt.sign(
                    {
                        userId: user._id
                    },
                    'RANDOM_TOKEN_SECRET',
                    {
                        expiresIn : '24h'
                    }
                )
            });
        })
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => { console.log("error")})
}

exports.getUsers = (req, res, next) => {
    User.find()
    .then(users => {
        res.status(200).json({ users });
    })
    .catch(error => res.status(500).json({ error}))
}
