// controllers/UserController.js

import UserModel from "./model/UserModel";

class UserController {
  static async getUsers() {
    try {
      const users = await UserModel.fetchUsers();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
}

export default UserController;
