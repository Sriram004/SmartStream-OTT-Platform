import { useState } from 'react';

export default function Player() {
  const [filename, setFilename] = useState('');

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Watch Video</h2>
      <input
        className="w-full p-2 border mb-4"
        placeholder="Enter filename"
        onChange={(e) => setFilename(e.target.value)}
      />
      {filename && (
        <video controls className="w-full" src={`http://localhost:5000/api/video/stream/${filename}`} />
      )}
    </div>
  );
}
