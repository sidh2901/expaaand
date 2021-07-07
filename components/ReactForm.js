
import React, { useState } from 'react';
import axios from 'axios';


function ReactForm() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
      const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone:'',
        message: '',

      });
      const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          });
          setInputs({
              name:'',
            email: '',
            phone:'',
            message: '',
          });
        } else {
          setStatus({
            info: { error: true, msg: msg },
          });
        }
      };
      const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      };
      const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/xjvjodne',
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you, your message has been submitted.',
            );
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
      };
      
    return (
        <main className="flex items-center p-4 text-lg text-gray-500 bg-white shadow-2xl">
     
      <hr />
      <form className="mb-2" onSubmit={handleOnSubmit}>
          <div>
          <label htmlFor="NAME">NAME:  </label>
        <input
          id="name"
          type="name"
          name="_replyto"
          className="mb-2 bg-gray-200 "
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
          </div>
        <div>
        <label htmlFor="email">EMAIL:  </label>
        <input
          id="email"
          type="email"
          name="_replyto"
          className="mb-2 bg-gray-200"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        </div>

        <div>
        <label htmlFor="email">PHONE:  </label>
        <input
          id="phone"
          type="phone"
          name="_replyto"
          className="mb-2 bg-gray-200"
          onChange={handleOnChange}
          required
          value={inputs.phone}
        />
        </div>
        <div>
        <label htmlFor="message">INQUIRY:  </label>
        <textarea
          id="message"
          name="message"
          className="mt-2 bg-gray-200"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        </div>
        
        <div className="p-2 text-center text-white bg-black">
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'CLICKITY  CLACK'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        </div>
        
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};
    

export default ReactForm
