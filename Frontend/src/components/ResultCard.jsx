const ResultCard = ({ data }) => (
  <div className="bg-blue-100 border mt-6 p-4 rounded shadow">
    <h3 className="font-bold text-lg mb-2">Aadhaar Status</h3>
    <p><strong>Status:</strong> {data.status}</p>
    <p><strong>Aadhaar:</strong> {data.aadhaar_number}</p>
    <p><strong>DOB:</strong> {data.dob}</p>
    <p><strong>Last Updated:</strong> {data.last_updated}</p>
  </div>
);

export default ResultCard;
