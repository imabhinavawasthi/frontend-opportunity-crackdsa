import React, { useState } from "react";
import CreateAdmin from "./CreateAdmin";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    company: "",
    tags: "",
    skills: "",
    requirements: "",
    desc: "",
    startdate: "",
    lastdate: "",
    stipend: "",
    location: "",
    duration: "",
    url: "",
  });
  const token = localStorage.getItem("token");
  const [live, setlive] = useState(false);
  const [exclusive, setexclusive] = useState(false);
  const [file, setfile] = useState();
  const [show, setShow] = useState(false);
  const [posted, setPosted] = useState(false);
  const [posting, setposting] = useState(false);
  function handlechange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleoptions(e) {
      setData((prev) => ({
        ...prev,
        tags: e.value?e.value:"",
      }));
  }


  async function post(e) {
    e.preventDefault();
    setposting(true);
    let form = new FormData(document.getElementById("form"));
    form.set("live", live);
    form.set("exclusive", exclusive);
    // form.set("requirements", data.requirements.split("\n"));
    form.delete("requirements");
    for(let it of data.requirements.split(",")){
      form.append("requirements",it);
    }
    form.set("tags", data.tags);

    try {
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      };

      const response = await fetch(
        
        "https://opportunity.run-ap-south1.goorm.site/jobs",
        options
      );
      const data = await response.json();
      console.log(data);
      setPosted(true);
      setposting(false);
      navigate(`/${data._id}/${data?.title.replaceAll(" ", "-")}`);
      setTimeout(() => {
        setData({
          title: "",
          company: "",
          tags: "",
          skills: "",
          requirements: "",
          desc: "",
          startdate: "",
          lastdate: "",
          stipend: "",
          location: "",
          duration: "",
          url: "",
        });
        setlive(false);
        setexclusive(false);
        setPosted(false);
      }, 2000);
     
    } catch (err) {
      console.log(err.message);
      setposting(false);
    }
  }
  const categoryOptions = [
    { value: "backend", label: "Backend Internships"},
    { value: "frontend", label: "Frontend Internships" },
    { value: "full-stack", label: "Full-Stack Internships" },
    { value: "sde", label: "SDE Full Time" },
    { value: "exclusive", label: "Exclusive Opportunities" },
  ];

  return (
    <>
      {posted ? (
        <h2 className="bg-green-300 px-7 py-2 my-2 font-mono capitalize flex justify-center text-black">
          ✅ Post Added Successfully
        </h2>
      ) : (
        ""
      )}
      <div className="bg-slate-100 text-black min-h-screen p-5 flex flex-col items-center min-w-full">
        <div className="flex flex-col lg:flex-row">
          <h2 className="text-3xl  font-semibold font-Poppins my-2">
            Post New Opportunity
          </h2>
          <button
            className="bg-green-500 lg:absolute right-0 mr-4 active:scale-105"
            onClick={() => {
              setShow(true);
            }}
          >
            Create New Admin
          </button>
        </div>
        <form
          id="form"
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col w-[90%] px-12"
        >
          <label htmlFor="title" className="text-lg">
            Internship Title
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Internship Title"
            id="title"
            name="title"
            value={data.title}
            onChange={handlechange}
          />
          <label htmlFor="company" className="text-lg">
            Company
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Company Name"
            id="company"
            name="company"
            value={data.company}
            onChange={handlechange}
          />
          <label htmlFor="tags" className="text-lg">
            Category
          </label>
          {/* <input className="inp" type="text" placeholder="Category" id="tags" name="tags" value={data.tags} onChange={handlechange}/>
           */}
          <Select
            options={categoryOptions}
            isClearable
            isSearchable
            placeholder="Category"
            classNamePrefix="react-select"
            onChange={handleoptions}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                textAlign: "left",
              }),
            }}
          />
          <label htmlFor="skills" className="text-lg">
            Skills
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Skills"
            id="skills"
            name="skills"
            value={data.skills}
            onChange={handlechange}
          />
          <label htmlFor="requirements" className="text-lg">
            Requirements
          </label>
          <textarea
            className="inp"
            rows="10"
            cols="30"
            placeholder="write requirements , seperated"
            id="requirements"
            name="requirements"
            value={data.requirements}
            onChange={handlechange}
          />
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Description"
            id="description"
            name="desc"
            value={data.desc}
            onChange={handlechange}
          />
          <label htmlFor="startdate" className="text-lg">
            Start Date
          </label>
          <input
            className="inp"
            type="date"
            placeholder="Start Date"
            id="startdate"
            name="startdate"
            value={data.startdate}
            onChange={handlechange}
          />
          <label htmlFor="lastdate" className="text-lg">
            Last Date To Apply
          </label>
          <input
            className="inp"
            type="date"
            placeholder="Last Date to Apply"
            id="lastdate"
            name="lastdate"
            value={data.lastdate}
            onChange={handlechange}
          />
          <label htmlFor="stipend" className="text-lg">
            Stipend
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Stipend"
            id="stipend"
            name="stipend"
            value={data.stipend}
            onChange={handlechange}
          />
          <label htmlFor="location" className="text-lg">
            Location
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Location"
            id="location"
            name="location"
            value={data.location}
            onChange={handlechange}
          />
          <label htmlFor="duration" className="text-lg">
            Duration
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Duration"
            id="duration"
            name="duration"
            value={data.duration}
            onChange={handlechange}
          />
          <label htmlFor="url" className="text-lg">
            URL
          </label>
          <input
            className="inp"
            type="url"
            placeholder="Enter URL"
            id="url"
            name="url"
            value={data.url}
            onChange={handlechange}
          />
          <div className="flex justify-start">
            <input
              className="w-5 mx-1"
              type="checkbox"
              id="live"
              name="live"
              checked={live}
              onChange={(e) => {
                setlive(e.target.checked);
              }}
            />
            <label htmlFor="live" className="text-lg pr-10">
              Live
            </label>
            <input
              className="w-5 mx-1"
              type="checkbox"
              id="exclusive"
              checked={exclusive}
              name="exclusive"
              onChange={(e) => {
                setexclusive(e.target.checked);
              }}
            />
            <label htmlFor="exclusive" className="text-lg">
              Exclusive
            </label>
          </div>

          <label htmlFor="file" className="text-lg">
            Image Upload
          </label>
          <input
            className="text-black"
            type="file"
            id="file"
            name="file"
            onChange={(e) => {
              setfile(e.target.files[0]);
            }}
          />
          <button
            className="bg-[#2FCDFF] disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#107999] disabled:hover:bg-[#2FCDFF] border-[#107999] border border-solid rounded-xl px-4 py-1 font-Poppins mx-[30%]  active:scale-105"
            onClick={post}
            disabled={posting}
          >
            Post
          </button>
        </form>
      </div>
      <CreateAdmin
        onClose={() => {
          setShow(false);
        }}
        show={show}
      />
    </>
  );
};

export default Form;
