const users = [
    {
      _id: 1,
      name: "Arie xixixixi",
      email: "ari@gmail.com",
      date: '02/11/2024',
      type: "new",
    },
    {
      _id: 2,
      name: "Arirawrr",
      email: "ari@gmail.com",
      date: '02/11/2024',
      type: "new",
    },
    {
      _id: 3,
      name: "John Doe",
      email: "john.doe@example.com",
      date: '01/15/2024',
      type: "new",
    },
    {
      _id: 4,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      date: '03/22/2024',
      type: "new",
    },
    {
      _id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      date: '02/25/2024',
      type: "new",
    },
    {
      _id: 6,
      name: "Emily Clark",
      email: "emily.clark@example.com",
      date: '01/09/2024',
      type: "new",
    },
    {
      _id: 7,
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      date: '04/02/2024',
      type: "new",
    },
    {
      _id: 8,
      name: "Liam Wilson",
      email: "liam.wilson@example.com",
      date: '05/15/2024',
      type: "new",
    },
    {
      _id: 9,
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      date: '06/10/2024',
      type: "new",
    },
    {
      _id: 10,
      name: "James Turner",
      email: "james.turner@example.com",
      date: '07/18/2024',
      type: "new",
    }
  ];
  

export const NewUserTable = () => {
  return (
    <div className="relative overflow-x-auto w-full max-h-96 overflow-y-auto">
      <table className="text-left text-sm text-gray-500 w-full">
        <thead className="bg-gray-50 text-sm uppercase text-gray-700 sticky top-0">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Tipe
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="border-b bg-white">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.name}
              </td>
              <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4">
                {user.email.length > 20
                  ? `${user.email.substring(0, 25)}...`
                  : user.email}
              </td>
              <td className="px-6 py-4">
                {new Date(user.date).toLocaleDateString("id-ID")}
              </td>
              <td className=" px-6 py-4 ">
                <p>{user.type}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
