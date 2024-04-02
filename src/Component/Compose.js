import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's snow theme CSS

function Compose() {
  const editorRef = useRef(null);
  function display(){
    
  }

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow' // Use 'snow' theme for a clean and simple interface
      });
    }
  }, []);

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "800px", padding: "20px" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ padding: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <input type="text" placeholder="To" style={{ width: "100%", padding: "10px", fontSize: "16px", border: "none", borderBottom: "1px solid #ccc", marginBottom: "10px" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input type="text" placeholder="Subject" style={{ width: "100%", padding: "10px", fontSize: "16px", border: "none", borderBottom: "1px solid #ccc", marginBottom: "10px" }} />
          </div>

          <div ref={editorRef} style={{ width: '100%', minHeight: '200px', border: "1px solid #ccc", borderRadius: "5px", padding: "10px", marginBottom: "20px" }} /> 
          
          
          <button style={{ marginRight: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} 
          onClick={display}>Send</button>
          <button style={{ padding: "10px 20px", backgroundColor: "#FFD700", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Discard</button>
        </div>
      </div>
    </div>
  );
}

export default Compose;
