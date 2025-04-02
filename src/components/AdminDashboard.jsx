import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:4000/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleMakeAdmin = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/admin/users/${id}/make_admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: "admin" }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user role");
      }

      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, role: "admin" } : user
        )
      );
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">User Management</h5>
    </div>
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.map((user) => (
          <li key={user.id} className="py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400 m-4">
                    {user.email}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400 m-4">
                    {user.username}
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user.id)}
                    className="text-white hover:underline text-sm"
                  >
                    Promot
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <NavBar />
  </div>
  
  );
}

export default AdminDashboard;
