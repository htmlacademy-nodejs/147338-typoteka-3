'use strict';

const {Router} = require(`express`);
const registerRouter = new Router();

registerRouter.get(`/`, (req, res) => res.render(`views/main/sign-up`));

module.exports = registerRouter;