const defaultResponse = require("../utils/defaultResponse");
const constants = require("../utils/constants");
const errorCodes = require("../utils/errorCodes");
const Users = require('../models/users')
exports.user =async (req, res) => {
  try{
    console.log('reached in user controller')
    let users = await Users.find();
    defaultResponse().success(
        constants.DATA_RETRIEVED,
        users,
        res,
        errorCodes.SUCCESS
    );
  }catch (e) {

  }

};
exports.findOneUser =async (req, res) => {
  try{
    console.log('reached in user controller')
    let users = await Users.findById(req.params.id);
    defaultResponse().success(
        constants.DATA_RETRIEVED,
        users,
        res,
        errorCodes.SUCCESS
    );
  }catch (e) {

  }

};

exports.save =async (req, res) => {
  try{
    const user = new Users({
      name:req.body.name,
      phoneNumber:req.body.phoneNumber,
      email:req.body.email,
    })
    let users = await user.save();
    defaultResponse().success(
        constants.DATA_RETRIEVED,
        users,
        res,
        errorCodes.SUCCESS
    );
  }catch (e) {

  }

};
