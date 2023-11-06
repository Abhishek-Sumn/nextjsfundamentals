import { table } from "console";
import React from "react";

interface user {
  id: number;
  name: string;
  email: string;
}

const Userslist = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: user[] = await res.json();

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
        <tr>
          <th  scope="col" className="px-6 py-3">Name</th>
          <th  scope="col" className="px-6 py-3">Email</th>
        </tr>
      </thead>

      <tbody className="bg-white dark:bg-gray-800">
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Userslist;
