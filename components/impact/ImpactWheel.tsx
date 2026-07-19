"use client";

import { motion } from "framer-motion";
import { impactAreas } from "./ImpactData";


type Props = {
  activeArea: string;
  setActiveArea: (name: string) => void;
};


export default function ImpactWheel({
  activeArea,
  setActiveArea,
}: Props) {


  return (

    <div className="impact-constellation">


      {/* Connecting Lines */}

      <svg
        className="impact-lines"
        viewBox="0 0 900 620"
        preserveAspectRatio="none"
      >

        <line x1="450" y1="310" x2="450" y2="80" />

        <line x1="450" y1="310" x2="120" y2="310" />

        <line x1="450" y1="310" x2="780" y2="310" />

        <line x1="450" y1="310" x2="260" y2="540" />

        <line x1="450" y1="310" x2="640" y2="540" />

      </svg>



      {/* Centre */}

      <motion.div

        className="impact-core"

        animate={{
          scale:[1,1.05,1],
        }}

        transition={{
          duration:3,
          repeat:Infinity,
        }}

      >

        <span>
          ATW
        </span>


        <strong>
          IMPACT
        </strong>


        <small>
          Empowered Women,
          <br />
          Empower Generations
        </small>


      </motion.div>



      {/* Pillars */}


      {impactAreas.map((area,index)=>(

        <motion.button

          key={area.name}


          className={
            activeArea === area.name
            ? `impact-node node-${index + 1} active`
            : `impact-node node-${index + 1}`
          }


          onMouseEnter={() =>
            setActiveArea(area.name)
          }


          whileHover={{
            scale:1.12,
          }}

        >

          {area.name}

        </motion.button>


      ))}


    </div>

  );

}