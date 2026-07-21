import Image from "next/image";
import Link from "next/link";
import { initiatives } from "@/data/initiatives";

export default function InitiativesGrid() {

return (

<section className="initiatives-section">

<div className="initiatives-grid">

{initiatives.map((item)=>(

<Link
href={`/initiatives/${item.slug}`}
key={item.slug}
className="initiative-card"
>

<Image
src={item.image}
alt={item.title}
fill
className="initiative-image"
/>


<div className="initiative-overlay">

<h3>
{item.title}
</h3>

<p>
  {item.description}
</p>

<span>
Learn More →
</span>

</div>


</Link>

))}

</div>

</section>

);

}