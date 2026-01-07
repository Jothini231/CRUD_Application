import { useEffect, useState } from "react";
import { createUser, deleteUser, getUsers, updateUser } from "../api/userService";

function UserList() {
  const [users, setUsers] = useState([]);
  const [showModel,setShowModel] = useState(false);
  const[isEditMode,setIsEditMode] = useState(false)
  const [formUser,setformUser] = useState({
    id:null,
    name:"",
    email:""
  })

  
  const loadUsers = () => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(loadUsers);
  };

  const openCreateModel = (user) => {
    setIsEditMode(false);
    setformUser({id:null,name:"",email:""})
    setShowModel(true);
  }

  const openEditModel = (user) => {
    setIsEditMode(true);
    setformUser(user);
    setShowModel(true);
  }

  const handleChange = (e) => {
    setformUser({
      ...formUser,
      [e.target.name]:e.target.value
    });
  }

  const handlesave = () =>{
    if(!formUser.name || !formUser.email){
      alert("Name and Email are required");
      return;
    }
    const apiCall = isEditMode ? updateUser(formUser.id,{
      name:formUser.name,
      email:formUser.email
    }) : createUser({
      name:formUser.name,
      email:formUser.email
    })

    apiCall.then(()=>{
      setShowModel(false);
      loadUsers();
    });
  }



  return (
    <>

      <div className="flex justify-end mb-4">
        <button
        onClick={openCreateModel}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
        >
          + Create User
        </button>
      </div>

      <table className="w-full border border-gray-200 border-collapse shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left text-gray-700">ID</th>
            <th className="px-6 py-3 border-b text-left text-gray-700">Name</th>
            <th className="px-6 py-3 border-b text-left text-gray-700">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-2">{user.id}</td>
              <td className="px-6 py-2">{user.name}</td>
              <td className="px-6 py-2">{user.email}</td>
              <td className="px-6 py-2 flex gap-2">
                <button
                 onClick={()=>openEditModel(user)}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    {showModel && (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{isEditMode ? "Edit User" : "Create User"}</h2>
        <input
            type="text"
            name="name"
            value={formUser.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border px-3 py-2 mb-3"
        />

        <input
            type="text"
            name="email"
            value={formUser.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-3 py-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <button onClick={() => setShowModel(false)} className="px-4 py-1 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors">Cancel</button>
          <button onClick={handlesave} className={`px-4 py-1 text-white rounded transition-colors ${
            isEditMode ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
          }`}>
            {isEditMode ? "Update" : "Create"}
            </button>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default UserList;
