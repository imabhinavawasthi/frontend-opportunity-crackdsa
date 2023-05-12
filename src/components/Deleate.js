import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Deleate = ({ token, id }) => {
  const navigate = useNavigate();
  const [deleting,setDeleting] = useState(false);

  async function Del() {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await fetch(
        "https://opportunity.run-ap-south1.goorm.site/jobs/" + id,
        options
      );
      const data = await res.json();

      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="">
      <button
        onClick={() => {
          setDeleting(!deleting);
        }}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Delete
      </button>
      {deleting && (
        <div className="absolute pt-2.5">
          Press Confirm to delete
          <button
            onClick={() => {
              Del();
            }}
            className="text-white bg-indigo-500 border-0 mx-5 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Deleate;
