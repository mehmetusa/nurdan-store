import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Hi there!

My name is Nurdan unlu, I was born and raised in Turkey and I am a professionally trained baker. Baking was a big part of my culture.  Growing up, I enjoyed watching my mom and grandmother bake and tried to help them as much as they would let me. I was fascinated with the flavors, textures, aroma, and of course - the designs! Because baking was such a big part of my childhood, I decided to take my skill to the next level and learn from a professional.  I was so nervous in class, though it came so naturally that I surprised my teacher, and myself.  I received my certificate after completing over 200 hours of professional training. 

 <br/>
 I take great pride in my baking.  It is extremely rewarding to showcase the finished product to my clients.  The look on the face of my clients when I unveil the cake, gives me the greatest sense of satisfaction and joy. I am so honored to be part of their special day.
<br/>
 

I pride myself in baking only quality cakes I make from scratch using only the freshest ingredients. Including my fondant work, homemade with only marshmallows and confectioner's sugar.

 <br/>

I am a dedicated baker who only strives for excellence. I will work tirelessly to provide an amazing cake for a special day.             </p>
   </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +1-202-844-9087
          </a>
          <br/>
          <br/>
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            info@nurdan.shop
          </a>
          <br/>
          <br/>
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
           Gainesville VA
          </a>
          <br/>
        </div>
      </section>
    </>
  )
}
