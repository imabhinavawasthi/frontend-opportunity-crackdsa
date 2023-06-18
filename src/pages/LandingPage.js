import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
import loder from "../images/loading.gif";
import Featuerd from "../components/Featuerd";
import { useNavigate } from "react-router-dom";
import telegram from "../images/telegram.png"

const LandingPage = ({ intern_data, loading, categories, error }) => {
  const [category, setcategory] = useState("");
  const [search, setSearch] = useState("By Skills");
  const [searching, setSearching] = useState(false);
  const [data, setdata] = useState([]);
  const [error2, seterror2] = useState("");
const navigate=useNavigate();
  const onOptionChangeHandler = (event) => {
   navigate(`/${event.target.value}/all_intern`)
  };
  // console.log(category)

  // async function fetchsearch() {
  //   try {
  //     if (search === "By Skills") {
  //       const res = await fetch(
  //         `https://opportunity.run-ap-south1.goorm.io/jobs?skills=${category}`
  //       );
  //       const data = await res.json();
  //       setSearching(true);
  //       setdata(data);
  //       console.log(data);
  //     } else {
  //       const res = await fetch(
  //         `https://opportunity.run-ap-south1.goorm.io/jobs?tags=${category}`
  //       );
  //       const data = await res.json();
  //       setSearching(true);
  //       setdata(data);
  //       console.log(data);
  //     }
  //   } catch (err) {
  //     seterror2(err.message);
  //   }
  // }
  // useEffect(() => {
  //   if (category === "") {
  //     setSearching(false);
  //   }
  // }, [category]);

  // if (error !== "") {
  //   return (
  //     <h1 className="md:text-4xl text-xl text-indigo-600 font-mono text-center py-10">
  //       {error}
  //     </h1>
  //   );
  // }
  // if (error2 !== "") {
  //   return (
  //     <h1 className="md:text-4xl text-xl text-indigo-600 font-mono text-center py-10">
  //       {error2}
  //     </h1>
  //   );
  // }
  if (loading) {
    return (
      <div className=" flex justify-center items-center 2xl:h-[63vh] lg:min-h-[53vh] md:h-[45vh] h-[55vh]">
        <img src={loder} className="h-[250px] w-[250px] " alt="spinner" />
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <h1 className="font-semibold lg:text-[40px] text-[25px] md:text-[35px] text-center md:pt-[50px] pt-[25px] font-serif mx-3">
          Explore Your Dream{" "}
          <span className="text-indigo-600">
            <Typewriter
              words={["Internships","Jobs","Opportunities"]}
              loop={100000}
              cursor
              cursorStyle="|"
              typeSpeed={180}
            />
          </span>{" "}
          Here 🚀
        </h1>
        <div className=" flex flex-row justify-center md:mt-[20px] mt-[15px] mx-[10px] ">
          {/* <BiSearch
            onClick={fetchsearch}
            className="md:text-[44px] text-[25px] h-[30px] text-[#110a60] bg-slate-200 md:h-[50px]  mb-[9px] rounded-l-[30px] pl-[11px] cursor-pointer"
          /> */}
            <select
              onChange={onOptionChangeHandler}
              className="md:h-[50px] h-[30px] md:w-[620px] text-[#110a60] w-[260px] md:text-2xl text-base font-semibold  bg-slate-200 rounded-3xl md:px-5 px-2 cursor-pointer"
              defaultValue="default"
            >
            <option disabled hidden value="default">Choose a Category</option>
            {categories.map((cat,i)=>(
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
            </select>
            {/* <input
              name="search-type"
              placeholder="Press enter to search"
              value={category}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  fetchsearch();
                }
              }}
              className="md:h-[50px] h-[30px] md:w-[620px] text-[#110a60] w-[260px] md:text-2xl text-base font-semibold  bg-slate-200 rounded-r-[30px] md:px-5 px-2"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            /> */}
        
        </div>

        <h1 className="text-center poppins-font font-semibold  py-4 mx-[15px]">
        Join <a style={{color:"#0088cc", textDecoration:"underline"}} href="https://t.me/crackdsajobsearch" target="_blank">Telegram Group</a> for Daily Job/Internships Update.
        </h1>
        
      </div>
      {category!=="" ? (
        <div className="lg:mx-[45px] mx-[22px] mt-4">
          <Featuerd catogery="Top Results" internship={intern_data[category]} />
        </div>
      ) : (
        <div className="lg:mx-[45px] mx-[22px] md:mt-5 mt-4">
          {categories.map((cat,i) => {
            return (
              <Featuerd
                key={i}
                catogery={cat.label}
                catvalue={cat.value}
                internship={
                  intern_data[cat.value] !== "No items present"
                    ? intern_data[cat.value].slice().reverse().slice(0,3)
                    : ""
                }
                loading={loading}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
