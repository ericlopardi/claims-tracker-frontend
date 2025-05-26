function ClaimTable({ claims, onStatusChange }) {
  return (
    <div>
      <div className="overflow-auto max-h-[600px] border border-blue-400 shadow-md rounded">
        <table className="table-fixed w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">User</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim, index) => (
              <tr
                key={`${claim.id}-${index}`}
                className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
              >
                <td className="border border-gray-300 px-4 py-2">{claim.id}</td>
                <td className="border border-gray-300 px-4 py-2">{claim.userName}</td>
                <td className="border border-gray-300 px-4 py-2">{claim.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={claim.status}
                    onChange={(e) => onStatusChange(claim.id, e.target.value)}
                    className={`px-2 py-1 rounded text-white font-medium shadow-sm
                      ${claim.status === 'Approved' ? 'bg-green-500' :
                        claim.status === 'In Review' ? 'bg-blue-500' :
                        claim.status === 'Denied' ? 'bg-red-500' :
                        'bg-yellow-500'}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Review">In Review</option>
                    <option value="Approved">Approved</option>
                    <option value="Denied">Denied</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">{claim.dateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClaimTable;
