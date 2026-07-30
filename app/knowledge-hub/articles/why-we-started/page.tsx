import Image from "next/image";
import Container from "@/components/layout/Container";
import Link from "next/link";


export default function WhyWeStarted() {


return (

<main className="article-page">


<Container>


<article className="article-single">


<header className="article-header">


<span className="section-label">
OUR STORY
</span>


<h1>
Why We Started:
A Thousand Women
</h1>



<div className="article-details">

<span>
November 9, 2024
</span>

<span>
By Jennifer A.
</span>

</div>


</header>





<div className="article-cover">


<Image

src="/images/why-we-started.jpeg"

alt="Why We Started A Thousand Women"

fill

priority

/>


</div>





<div className="article-body">


<p>
At A Thousand Women, our journey began with a simple but eye-opening discovery that shook us to the core. After deep reflection and important conversations within our team, we realised that too many young girls in Africa were struggling with the basic resources needed to thrive.
</p>



<p>
One of the moments that sparked our mission happened during a conversation with a principal at a local school in Nigeria. We learned that many girls were missing school because they could not afford basic sanitary products like pads.
</p>



<p>
During menstruation, these girls were forced to stay home because they lacked the supplies and support they needed. This meant missing lessons, falling behind academically, and experiencing challenges no child should have to face.
</p>



<h2>
A Movement Was Born
</h2>



<p>
This became a turning point for us. We realised that the fight for women’s empowerment starts with the basics: ensuring every girl has access to education, resources, dignity, and the support she needs to reach her full potential.
</p>



<p>
And so, A Thousand Women was born.
</p>




<h2>
Our Focus Areas
</h2>



<ul>

<li>
Advocacy for women’s rights and creating opportunities for girls.
</li>


<li>
Educational support including scholarships and mentorship.
</li>


<li>
Community engagement and safe spaces for girls to grow.
</li>


<li>
Mental well-being initiatives that build confidence and resilience.
</li>


</ul>




<h2>
How You Can Help
</h2>



<p>
We cannot create lasting change alone. Your support helps us provide sanitary products, educational resources, mentorship and opportunities for girls across Africa.
</p>




<div className="article-cta">


<h3>
Together, We Empower Generations
</h3>


<p>
Donate, volunteer, partner with us, or share our story.
</p>



<Link href="/contact">
Get Involved →
</Link>


</div>



</div>


</article>


</Container>


</main>

);

}