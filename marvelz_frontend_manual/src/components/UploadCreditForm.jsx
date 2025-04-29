
import { useState } from 'react';
import { uploadCreditReport } from '../services/api';

export default function UploadCreditForm() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('❗ Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('creditReport', file);

    setLoading(true);
    try {
      const response = await uploadCreditReport(formData);
      setMessage(response.message || '✅ Upload Successful!');
    } catch (error) {
      setMessage(error.response?.data?.message || '❌ Upload Failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Upload Your Credit Report</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select File</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Now'}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-lg font-medium text-gray-700">{message}</p>
      )}
    </div>
  );
}
