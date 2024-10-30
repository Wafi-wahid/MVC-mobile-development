export default class UserModel {
  static async fetchUsers() {
    // Simulated API call
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
  }
}
