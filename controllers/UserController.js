const UserModel = require("../models").User;
const ToDoListModel = require("../models").ToDoList;
const bcrypt = require("bcrypt");

module.exports = {
  signup: async (req, res) => {
    let response = {};
    let status_code = 200;
    try {
      const user_exist = await UserModel.findOne({
        where: { email: req.body.email },
      });
      if (user_exist) {
        response = { error: "User already exist against this email." };
        status_code = 400;
      } else if (req.body.password !== req.body.confirm_password) {
        response = { error: "Password mismatch." };
        status_code = 400;
      } else {
        UserModel.create({
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
        });
      }
    } catch (e) {
      response = { error: e.message };
      status_code = 500;
    }

    res.status(status_code).json(response);
  },
  login: async (req, res) => {
    let response = {};
    let status_code = 200;
    try {
      const user_exist = await UserModel.findOne({
        where: { email: req.body.email },
      });
      if (user_exist) {
        if (!bcrypt.compareSync(req.body.password, user_exist.password)) {
          response = { error: "Incorrect Password." };
          status_code = 400;
        } else {
          response.uid = user_exist.id;
        }
      } else {
        response = { error: "User not found." };
        status_code = 400;
      }
    } catch (e) {
      response = { error: e.message };
      status_code = 500;
    }
    res.status(status_code).json(response);
  },
  create_new_task: async (req, res) => {
    let response = {};
    let status_code = 200;
    try {
      const result = await ToDoListModel.create({
        title: req.body.title,
        priority: req.body.priority,
        uid: req.body.uid,
      });
    } catch (e) {
      response = { error: e.message };
      status_code = 500;
    }
    res.status(status_code).json(response);
  },
  get_all_tasks: async (req, res) => {
    let response = {};
    let status_code = 200;
    try {
      const result = await ToDoListModel.findAll({
        where: { uid: req.body.uid },
      });
      response.tasks = result;
    } catch (e) {
      response = { error: e.message };
      status_code = 500;
    }
    res.status(status_code).json(response);
  },
  delete_task: async (req, res) => {
    let response = {};
    let status_code = 200;
    try {
      const result = await ToDoListModel.destroy({
        where: { id: req.body.tid },
      });
      response.tasks = result;
    } catch (e) {
      response = { error: e.message };
      status_code = 500;
    }
    res.status(status_code).json(response);
  },
};
