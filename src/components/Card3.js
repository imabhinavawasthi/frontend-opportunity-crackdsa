import React from "react";
import { NavLink } from "react-router-dom";
import "./Card3.css"

const Card3 = ({ data }) => {
  return (
    <div className="card-bg-main rounded-lg hover:shadow-md hover:-translate-y-1 border border-gray grow shrink basis-0 min-w-fit max-w-sm">
    <NavLink to={`/${data._id}/${data?.title.replaceAll(" ", "-")}`}>
    <picture class="rounded-lg overflow-hidden block">
    <img
        src={"https://opportunity.run-ap-south1.goorm.site" + data.image}
        alt=""
        className="hover:scale-125 ease-in duration-150 h-56 w-full rounded-md object-contain"
      />
      </picture>
      

      <div className="m-4  ">
        <dl>
          <div>
            <dt className="sr-only">Company</dt>

            <dd className="text-sm text-gray-500 capitalize">{data.company}</dd>
          </div>

          <div>
            <dt className="sr-only">Title</dt>

            <dd className="font-medium capitalize">{data.title}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs ">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="rgb(79 70 229)"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Location</p>

              <p className="font-medium capitalize">{data.location}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              fill="rgb(79 70 229)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500 capitalize">Last Date</p>

              <p className="font-medium capitalize">{data.lastdate.slice(0, 10)}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              fill="rgb(79 70 229)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Duration</p>

              <p className="font-medium capitalize">{data.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
    </div>
  );
};

export default Card3;
