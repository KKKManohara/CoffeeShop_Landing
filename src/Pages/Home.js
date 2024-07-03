import React from 'react'
import newcoffee from '../Images/coffeepng.png';
import pattern from '../Images/pattern.png';
import coffee from '../Images/coffee.png';
import beans from '../Images/beans.png';
import patterns from '../Images/patterns.png';
import patterns2 from '../Images/patterns2.png';
import CoffeeCard from '../Componets/CoffeeCard';
import NavBar from '../Componets/NavBar';

export default function Home() {
  return (
    <div>
        <div className='relative'>
        <NavBar />
      </div>
      <div className='min-h-[300px] '>
      </div>
        <img
              className=" w-[2000px] max-h-[800px] -mt-[400px]"
              src="https://perfectdailygrind.com/wp-content/uploads/2019/02/coffee-bar.jpg"
              alt="Coffee Shop"/>
      <div className=' bg-yellow-950 min-h-[700px] -mt-[700px] opacity-50'>
      </div>
      <div className='relative grid grid-cols-3'>
        <div className=' max-h-[900px] col-span-2 '>
        <div>
        <h1 className="text-[50px] font-bold text-black mt-[100px] ml-[200px]">
            Discover Our Coffee Selection
          </h1>   
      <CoffeeCard />
      <div>
        
      <img
              className="object -mt-[1000px] -ml-[100px] max-h-[1000px]"
              src={patterns}
              alt="Coffee Shop"
            />
      </div>

      </div>
        </div>

        <div className=' min-h-[900px]'>
        <div>
        <img
              className=" object  max-h-[500px] -mt-[80px]"
              src={beans}
              alt="Coffee Shop"
            />
      <img
              className="ralative   max-h-[500px] -mt-[700px]"
              src={coffee}
              alt="Coffee Shop"
            />
           
      </div>
        <h1 className="text-[30px] font-bold text-[#BF8425] mt-[250px] ">
            Explore Our Coffee Menu
          </h1>
          <p className='text-[20px] font-bold text-[#451a03] mr-[150px]'>
          Immerse yourself in our handcrafted coffee menu, featuring a variety 
          of bold espressos, creamy lattes, and refreshing iced coffees, each
           expertly prepared to elevate your coffee experience.
          </p>
          <br></br>
          <button className='relative px-16 py-4  text-lg text-white bg-[#451a03] rounded-xl'>
                More details
          </button>

        </div>
        
      </div>

      

      

      <div className="relative bg-[#451a03] max-h-[1500px]">
        <img
          className="object-cover w-full max-h-[1500px] opacity-20"
          src={pattern}
          alt="Coffee Shop"
        />
        <div className="absolute top-0 left-0 right-0 mt-[100px]">
          <div className="grid grid-cols-3 gap-10 px-[140px]">
            <div className="min-h-[100px] col-span-3 flex items-center justify-center">
              <h1 className="mb-[80px] text-5xl font-bold text-white underline">
                Experience Our Offerings
              </h1>
            </div>
            <div className="max-h-[300px] row-span-2">
              <img
                className="object-cover w-full h-full"
                src="https://lifeboostcoffee.com/cdn/shop/articles/1445732_Highelevationcoffeebeans_NoLogo_SteamingCupOfCoffee4_090222.jpg?v=1664805147"
                alt="Coffee"
              />
            </div>
            <div className="min-h-[100px] col-span-2 row-span-2 flex items-center justify-center">
              <div className="p-4 text-white">
                <p>
                  Coffee is one of the most beloved beverages in the world, cherished for its rich flavor, invigorating aroma, and energizing effects. Originating from the coffee beans of the Coffea plant, coffee has a deep-rooted history dating back centuries and spanning across continents.
                </p>
                <p className="mt-4">
                  The journey of coffee begins with the cultivation of coffee plants, primarily grown in tropical and subtropical regions. The two most popular species are Coffea arabica and Coffea canephora (commonly known as Robusta). Arabica beans are prized for their delicate flavor profile and lower caffeine content, whereas Robusta beans are known for their strong, bold taste and higher caffeine levels.
                </p>
                <p className="mt-4">
                  Once processed, the beans undergo roasting, which is a pivotal step in defining the coffee's final taste. Roasting transforms the green coffee beans into aromatic, dark brown beans through a complex series of chemical reactions. The degree of roasting—from light to dark—greatly influences the flavor, aroma, and body of the coffee. Light roasts tend to retain more of the beans' original characteristics, with bright acidity and floral notes, while dark roasts develop richer, more robust flavors with hints of chocolate and caramel.
                </p>
              </div>
            </div>
            <div className="max-h-[400px] row-span-2">
              <p className="p-4 text-white">
                Once processed, the beans undergo roasting, which is a pivotal step in defining the coffee's final taste. Roasting transforms the green coffee beans into aromatic, dark brown beans through a complex series of chemical reactions. The degree of roasting—from light to dark—greatly influences the flavor, aroma, and body of the coffee. Light roasts tend to retain more of the beans' original characteristics, with bright acidity and floral notes, while dark roasts develop richer, more robust flavors with hints of chocolate and caramel.
                <br />
                Once processed, the beans undergo roasting, which is a pivotal step in defining the coffee's final taste. Roasting transforms the green coffee beans into aromatic, dark brown beans through a complex series of chemical reactions. The degree of roasting—from light to dark—greatly influences the flavor, aroma, and body of the coffee. , with bright acidity and floral notes, while dark
              </p>
            </div>
            <div className="max-h-[400px] col-span-2 row-span-2">
              <img
                className="object-cover w-full h-full"
                src="https://sumatocoffee.com/cdn/shop/articles/the-psychology-of-coffee-shops-511448_948x.jpg?v=1713277729"
                alt="Coffee Shop"
              />
            </div>
          </div>
          <h1 className="text-[70px] font-bold text-white mt-[100px] ml-[200px]">
            Introducing
            <br />
            Our Specialty
            <br />
            Brew
          </h1>
          <div className="flex flex-col items-center mt-8">
            <img
              className="object -mt-[400px] ml-[300px] max-h-[1000px]"
              src={newcoffee}
              alt="Coffee Shop"
            />
            <div className="text-black text-[15px] font-bold text-center w-full max-w-[800px] mt-8">
              Discover our latest addition at EspressoZen Cafe: a meticulously crafted coffee made using a special brewing technique that enhances its flavor profile. Experience the depth and richness of this unique blend, carefully prepared by our skilled baristas to offer you a delightful and unforgettable coffee experience.
              <div className="min-h-[100px] flex items-center justify-center mt-4">
                <button
                  className="px-6 py-3 bg-[#271300] text-white text-lg font-bold rounded hover:bg-yellow-600 transition-colors"
                >
                  Taste Our Specialty Brew
                </button>
              </div>
            </div>
          </div>
          <div className="min-h-[100px] flex items-center justify-center mt-4">
            <h1 className="mb-[80px] text-5xl font-bold text-[#271300] underline mt-20">
              Crafting Excellence
            </h1>
          </div>
          <div className="relative bg-[#271300] max-h-[200px] w-full mt-[150px]">
            <div className="relative flex flex-col items-center justify-center"> 
              <img
                className="relative max-h-[400px] -mt-[110px]"
                src={coffee}
                alt="Coffee Cup"
              />
              <img
                className="max-h-[400px] -mt-[210px]"
                src={beans}
                alt="newcoffee"
              />
            </div>
          </div>
          <div className="relative grid grid-cols-6 gap-2 px-[140] -mt-36 mb-36">
            <div className=""></div>
            <div className="text-white text-[50px]">1987</div>
            <div className=""></div>
            <div className=""></div>
            <div className="text-white text-[50px] text-right">2024</div>
            <div className=""></div>
          </div>
          <ul className="grid grid-cols-3 gap-1 px-[140px] mt-20">
            <li className="text-black text-[20px] font-bold">
              Since 1987, EspressoZen Cafe has been synonymous with quality, crafting each cup with a blend of expertise and passion that has stood the test of time. As we mark over three decades of serving our community, we remain committed to delivering exceptional coffee experiences that evoke nostalgia while embracing innovation.
            </li>
            <li className="h-24"></li>
            <li className="text-black text-[20px] font-bold text-right">
              Since 1987, EspressoZen Cafe has been synonymous with quality, crafting each cup with a blend of expertise and passion that has stood the test of time. As we mark over three decades of serving our community, we remain committed to delivering exceptional coffee experiences that evoke nostalgia while embracing innovation.
            </li>
            <li className="text-black text-[20px] font-bold text-center col-span-3 flex items-center justify-center mt-12">
              Since 1987, EspressoZen Cafe has been synonymous with quality, crafting each cup with a blend of expertise and passion that has stood the test of time. As we mark over three decades of serving our community, we remain committed to delivering exceptional coffee experiences that evoke nostalgia while embracing innovation. 
            </li>
          </ul>
          <img
        className="object -ml-96 -mt-[650px] max-h-[1500px]"
        src={patterns}
        alt="Coffee Shop"
      />







<section class="body-font relative text-gray-400 -mt-[700px] bg-gradient-to-b from-[#27130033] to-[#271300ff]">


  <div class="container mx-auto px-5 py-24">
    
    <div class="mb-12 flex w-full flex-col text-center">
      <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
      <p class="mx-auto text-base leading-relaxed lg:w-2/3 text-[#271300]">If you need any help with booking a table or have any questions about our reservation process, please don't hesitate to reach out to us. We're here to assist you and ensure you have a seamless and enjoyable experience. Feel free to message us for any inquiries or support.
      </p>
    </div>

    <div class="mx-auto md:w-2/3 lg:w-1/2">
      <div class="-m-2 flex flex-wrap">

    
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="text" id="name" name="name" class="peer w-full rounded border border-[#271300] bg-[#271300] bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#BF8425] focus:bg-[#271300] focus:ring-2 focus:ring-[#BF8425]" placeholder="Name" />
            <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#271300] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white">Name</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="email" id="email" name="email" class="peer w-full rounded border border-[#271300] bg-[#271300] bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#BF8425] focus:bg-[#271300] focus:ring-2 focus:ring-[#BF8425]" placeholder="Email" />
            <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white">Email</label>
          </div>
        </div>
        <div class="mt-4 w-full p-2">
          <div class="relative">
            <textarea id="message" name="message" class="peer h-32 w-full resize-none rounded border border-[#271300] bg-[#271300] bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#BF8425] focus:bg-[#271300] focus:ring-2 focus:ring-[#BF8425]" placeholder="Message"></textarea>
            <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#271300] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white">Message</label>
          </div>
        </div>
        <div class="w-full p-2">
          <button class="mx-auto flex rounded border-0 bg-[#271300] py-2 px-8 text-lg text-white hover:bg-[#BF8425] focus:outline-none">Book</button>
        </div>


       
        <div class="mt-8 w-full border-t border-[#271300] p-2 pt-8 text-center">
          <a class="text-[#271300]">kavindakmanohara@gmail.com</a>
          <p class="my-5 leading-normal text-white">270/F, KADAWATHA ROAD <br />GANEMULLA</p>
          <span class="inline-flex">
            <a class="text-[#271300]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-[#271300]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-[#271300]">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-[#271300]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>

      </div>
    </div>

  </div>
  
</section>



        </div>
      </div>
      <img
        className="object ml-96 -mt-96 max-h-[1500px]"
        src={patterns2}
        alt="Coffee Shop"
      />
      
    </div>
  )
}
