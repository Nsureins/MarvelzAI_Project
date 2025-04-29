
import axios from 'axios';

export const uploadCreditReport = async (formData) => {
  const response = await axios.post('/api/upload-credit', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
