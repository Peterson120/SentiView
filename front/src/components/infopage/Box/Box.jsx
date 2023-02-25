import "./Box.css";
import { motion } from 'framer-motion';
import loading from './loading.gif';

function Box(props) {
  const data = Array.from(props.data);

  const addBox = (e) => {
    const modal = document.querySelector(".modal");
    modal.classList.add("block");
    modal.classList.remove("hidden");

    const switchTitle = document.getElementById("switch");
    switchTitle.innerText = props.title;

    const info = document.getElementById("info");
    info.innerText = "";

    const rightData = e.target.innerText;
    for (let i = 0; i < props.sents.length; i++) {
      if (props.sents[i].includes(rightData)) {
        info.innerText += `- ${props.sents[i]} \n`;
      }
    }
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("block");
    modal.classList.add("hidden");
  };

  return (
    <div className="mt-auto mb-auto flex justify-center">
      <div className="box flex border-2 border-solid border-[#FFD178]">
        <div className="gradient self-start flex justify-center" id={props.id}>
          <h2 className="title-text">{props.title}</h2>
        </div>
        {props.loading ? <div className="flex flex-col w-full h-full justify-center overflow-y-scroll overflow-x-hidden">
          {data.map((data, index) => (
              <ol key={index} className="list-disc list-none">
                <motion.li
                    id="press"
                    className="text-[#FFD178] font-bold hover:cursor-pointer"
                    onClick={addBox}
                    whileHover={{scale: 1.1}}
                >
                  {data.name}
                </motion.li>
                <li className="text-white">{data.count} occurrences</li>
              </ol>
          ))}
        </div> : <img className={"m-auto"} src={loading} alt={"Loading..."} width={50} />}
        <div className="modal hidden fixed left-0 top-0 mt-1/2 w-full h-screen bg-darkBg flex items-center">
          <div className="border-2 border-solid border-[#FFD178] mx-auto box flex justify-center">
            <div className="gradient self-start flex items-center">
              <span
                onClick={closeModal}
                className="float-right font-bold text-[#FFD178] hover:text-[#FFD178] hover:no-underline hover:cursor-pointer ml-10 absolute"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <h2 id="switch" className="title-text mx-auto">
                {props.title}
              </h2>
            </div>
            <h1 id="info" className="p-[20px] text-[#FFD178] text-center h-full w-full overflow-y-scroll"></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;