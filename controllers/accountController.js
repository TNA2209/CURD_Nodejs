const accountModel = require("../models/accountModel");

const accountController = {
  registerAccount: async (req, res, next) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const existingAccount = await accountModel.find({ username: username });
      if (existingAccount.length > 0) {
        res.json("Tai khoan da ton tai");
      } else {
        let newAccount = await accountModel.create({
          username: username,
          password: password,
        });
        res.json("Tao tai khoan thanh cong");
      }
    } catch (error) {
      res.status(500).json("Loi server");
    }
  },
  findAccount: async (req, res, next) => {
    try {
      const accountId = req.params.id;
      if (accountId) {
        const existingAccount = await accountModel.findById(accountId);
        if (existingAccount) {
          res.json(existingAccount);
        } else {
          res.json("Tai Khoan Khong Ton Tai");
        }
      } else {
        const allAcount = await accountModel.find({});
        res.json(allAcount);
      }
    } catch (error) {
      res.status(500).json("Loi server");
    }
  },
  updatePassword: async (req, res, next) => {
    try {
      const newPassword = req.body.newPassword;
      const accountId = req.params.id;
      const existingAccount = await accountModel.findById(accountId);
      if (existingAccount) {
        existingAccount.password = newPassword;
        await existingAccount.save();
        res.json("Cap Nhat Mat Khau Thanh Cong");
      } else {
        res.json("Tai Khoan Khong Ton Tai");
      }
    } catch (error) {
      res.status(500).json("Loi server");
    }
  },
  deleteAccount: async (req, res, next) => {
    try {
      const accountId = req.params.id;
      const existingAccount = await accountModel.findById(accountId);
      if (existingAccount) {
        const dltAccount = await accountModel.deleteOne(existingAccount);
        res.json("Xoa Tai Khoan Thanh Cong");
      } else {
        res.json("Tai Khoan Khong Ton Tai");
      }
    } catch (error) {
      res.status(500).json("Loi server");
    }
  },
};

module.exports = accountController;
