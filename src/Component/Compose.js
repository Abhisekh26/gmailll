import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Compose = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [editorHtml, setEditorHtml] = useState('');

  const handleSend = () => {
    // Here you can implement your logic to send the email
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Body:', editorHtml);
  };

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', padding: '20px' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{ width: 'calc(50% - 10px)', padding: '10px', fontSize: '16px', border: 'none', borderBottom: '1px solid #ccc', marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: 'calc(50% - 10px)', padding: '10px', fontSize: '16px', border: 'none', borderBottom: '1px solid #ccc' }}
          />
        </div>
        <ReactQuill
          value={editorHtml}
          onChange={setEditorHtml}
          placeholder="Compose your email..."
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', minHeight: '200px', marginBottom: '20px' }}
        />
        <div style={{ textAlign: 'right' }}>
          <button onClick={handleSend} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Compose;
