'use client';
import { useState } from 'react';

export default function CommentForm() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    comment: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.fname ||  !formData.lname  ||  !formData.comment) {
      alert('Please fill all fields');
      return;
    }
    setComments(prev => [...prev, { ...formData }]);
    setFormData({ fname: '', lname: '', comment: '' });
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">
        Anyone who wants to ask or share their experience in ASTU — leave a comment below 🙂
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-4 rounded shadow">
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black text-white border border-gray-700"
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black text-white border border-gray-700"
        />
        <textarea
          name="comment"
          placeholder="Your comment..."
          value={formData.comment}
          onChange={handleChange}
          className="w-full p-2 rounded bg-black text-white border border-gray-700"
          rows="4"
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">
          Submit
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {comments.map((c, i) => (
          <div key={i} className="bg-gray-800 p-3 rounded">
            <strong>{c.fname} {c.lname}</strong>
            <p>{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}