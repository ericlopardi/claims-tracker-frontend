function ClaimRow({ claim, onStatusChange }) {
  const handleChange = (e) => {
    onStatusChange(claim.id, e.target.value);
  };

  return (
    <tr className="odd:bg-white even:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2">{claim.id}</td>
      <td className="border border-gray-300 px-4 py-2">{claim.userName}</td>
      <td className="border border-gray-300 px-4 py-2">{claim.description}</td>
      <td className="border border-gray-300 px-4 py-2">
        <select
          value={claim.status}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="In Review">In Review</option>
          <option value="Approved">Approved</option>
          <option value="Denied">Denied</option>
        </select>
      </td>
      <td className="border border-gray-300 px-4 py-2">{claim.dateCreated}</td>
    </tr>
  );
}

export default ClaimRow;
