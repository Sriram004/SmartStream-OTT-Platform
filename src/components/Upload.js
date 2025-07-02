import { useState } from 'react';
import API from '../api';

export default function Upload() {
  const [video, setVideo] = useState(null);

  const upload = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('video', video);
    const res = await API.post('/video/upload', form);
    alert('Uploaded: ' + res.data.originalname);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Video</h2>
      <form onSubmit={upload} className="space-y-4">
        <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
        <button className="bg-purple-500 text-white p-2 w-full">Upload</button>
      </form>
    </div>
  );
}
