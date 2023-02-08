const path = require('path');

const controller = {
    main: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '../views/home.html'));
    },
    about: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '../views/about.html'));
    }
};

module.exports = controller;