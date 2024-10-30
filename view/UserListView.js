import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import UserController from "../controller/UserController";

const UserListView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await UserController.getUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.user}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 60 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  user: { fontSize: 18, marginVertical: 5 },
});

export default UserListView;
