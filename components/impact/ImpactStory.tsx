import { impactAreas } from "./ImpactData";


type Props = {
  activeArea:string;
};


export default function ImpactStory({
  activeArea
}:Props){

 const area =
 impactAreas.find(
  item=>item.name===activeArea
 );


 if(!area) return null;


 return (

  <div className="impact-story">

    <span>
      {area.name}
    </span>


    <h3>
      {area.title}
    </h3>


    <p>
      {area.description}
    </p>


    <strong>
      {area.number}
    </strong>


    <small>
      {area.metric}
    </small>


  </div>

 );

}