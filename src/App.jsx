import { useState, useEffect } from 'react';
import ClaimForm from './components/ClaimForm';
import ClaimTable from './components/ClaimTable';

function App() {
  const [claims, setClaims] = useState([]);
  const [message, setMessage] = useState('');

  const fetchClaims = async () => {
    const res = await fetch('http://localhost:8080/claims');
    const data = await res.json();
    setClaims(data);
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  const handleCreateClaim = async ({ userName, description }) => {
    const response = await fetch('http://localhost:8080/claims', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, description }),
    });

    if (response.ok) {
      setMessage('Claim submitted successfully!');
      fetchClaims();
    } else {
      setMessage('Error submitting claim.');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const response = await fetch(`http://localhost:8080/claims/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: newStatus,
    });

    if (response.ok) {
      setMessage(`Claim #${id} updated to ${newStatus}`);
      fetchClaims();
    } else {
      setMessage('Error updating claim status.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4"
      style={{ backgroundImage: "url('/blue-wave-background.png')" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Form Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black/20">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center tracking-tight">
            Claims Tracker
          </h1>
          <ClaimForm onSubmit={handleCreateClaim} />
          {message && (
            <p className="text-green-600 font-medium mt-4 transition-all text-center">
              {message}
            </p>
          )}
        </div>

        {/* Table Card */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-black/30 border border-black/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600">Submitted Claims</h2>
          </div>
          <ClaimTable claims={claims} onStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
