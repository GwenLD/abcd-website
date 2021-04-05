import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.css"
import { AboutCard } from "../components/Cards"
import { Heading1, Heading2, Heading3, Paragraph } from "../components/Type";


// Friday - let's get background images working. Buky will try this before Friday
// https://tailwindcss.com/docs/background-image#customizing

// w-full md:w-1/2 <-- this means that everything on a small screen "up to" size medium is w-full. at medium and above, it's w-1/2


function about() {
  return (
    <div>
      <div className="bg-about-smile bg-cover min-h-screen pt-2 px-2 md:px-20">
        <div className="w-full lg:w-1/2 rounded-lg md:rounded-3xl lg:rounded-full p-2 md:p-20 mt-20 bg-blue-500 bg-opacity-80 hover:bg-blue-500">
        <div className="p-1 bg-blue-300 w-full bg-opacity-80 top-0 hover:bg-blue-100"></div>
          <section className="my-2 md:m-5 md:py-9">
            <Heading2>
              Africa's Blockchain Center for Developers
            </Heading2>
            <Paragraph>
              empowering the African woman for greater exploits...
            </Paragraph>
          </section>
          <div className="p-1 bg-blue-300 w-full bg-opacity-80 top-0 hover:bg-blue-100"></div>
          <section className="my-2 md:mx-5 md:my-5">
            <Link href="/">
              <Paragraph>
                <a className="">
                  Learn more
                </a>
              </Paragraph>
            </Link>
          </section>
        </div> 
      </div>

      <section className="text-center py-20">
        <Heading1>WHAT WE DO </Heading1>
      </section>

      <div className="flex flex-col xl:flex-row xl:py-20 justify-center bg-gradient-to-r from-blue-800 via-white to-blue-800">
        <AboutCard>
            <div class="">
                <img class="h-48 w-full object-cover" src="/table.jpg" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <Heading3>Cardano Hub</Heading3>
              <Paragraph>
                <a href="#" class="">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              </Paragraph>
              <Paragraph>Women are the core of technological and we are all for Women empowerment.</Paragraph>
            </div>
        </AboutCard>

        <AboutCard>
            <div class="">
                <img class="h-48 w-full object-cover" src="/blue.jpg" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <Heading3>Build Applications for the Blockchain</Heading3>
              <Paragraph>
                <a href="#" class="">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
                Women are the core of technological and we are all for Women empowerment.
              </Paragraph>
            </div>  
        </AboutCard>

        <AboutCard>
            <div class="">
                <img class="h-48 w-full object-cover" src="/robot.jpg" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <Heading3>Innovation</Heading3>
              <Paragraph>
                <a href="#" class="">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
                Women are the core of technological and we are all for Women empowerment.
              </Paragraph>
            </div>
        </AboutCard>
      </div>

      <section className="text-center p-20">
          <Heading1>OUR VISION</Heading1>
      </section>
      
      <section className="flex flex-col lg:flex-row w-5/6 mx-auto bg-gradient-to-r from-blue-800 via-white to-blue-800 rounded-3xl">
        <div className="w-full lg:w-3/6 px-5 pt-5 lg:pl-10 lg:py-10">
          <Image src="/robot.jpg" width={1224} height={816} alt="white background"/>
        </div>
        <div className="w-full lg:w-3/6 p-2 lg:px-5 lg:py-5 lg:px-10 lg:py-10">
          <Paragraph>
            Africa has brilliant minds that are full of ideas and energy but who lack access to the infrastructure and funds to realize their dreams. 
          </Paragraph>
          <Paragraph>
            ABCD will create opportunities for Africans providing blockchain solutions to the world utilizing the pool of talent working from Africa.
          </Paragraph>
          <Paragraph>
             ABCD founders have been long involved in the development of initiatives related to the tech industry and blockchain in Nigeria and Africa.
          </Paragraph>
        </div>
      </section>




      <section className="text-center p-20 ">
          <Heading1>OUR MISSION STATEMENT</Heading1>
        </section>
      <div className={styles.header}></div>
      <div className="p-5 lg:p-20 justify-center border-blue-800">
        <Paragraph>
        Africa has brilliant minds that are full of ideas and energy but who lack access to the infrastructure and funds to realize their dreams.
        </Paragraph>
        <Paragraph>
          ABCD will create opportunities for Africans providing blockchain solutions to the world utilizing the pool of talent working from Africa.
        </Paragraph>
        <Paragraph>
          ABCD founders have been long involved in the development of initiatives related to the tech industry and blockchain in Nigeria and Africa.
        </Paragraph>

        <Paragraph>
          To do so, we have reviewed some of our initial objectives, perhaps too ambitious, in order to arrive at a roadmap that is still ambitious but realistically achievable.
        </Paragraph>
        <Paragraph>
          You will find below, a short description of the project. More detailed information is available in the attached documents.
        </Paragraph>
        <Paragraph>
          The mission of the African Blockchain Center for Developers is to stimulate, thanks to Cardano adoption, the establishment and growth of technology-based start-up companies and other blockchain-enabled businesses.
        </Paragraph>
        <Paragraph>
          By fulfilling this mission, ABCD will concretely contribute to:
        </Paragraph>
        <ul>
          <li>Local job creation</li>
          <li>Local business development</li>
          <li>On-boarding to the global Cardano ecosystem</li>
          <li>Contribute to the rise of blockchain technologies and decentralization in Africa</li>
          <li>Creation of Smart contracts and decentralized applications (Dapps)</li>
          <li>Address, thanks to decentralization, some of the most pressing issues in Africa (ID systems, land registration, blood donation, access to property, traceability, etc.)</li>
        </ul>

        <Paragraph>
          Together with the Cardano Community and in particular with African entities such as Gimbalabs, WADA, IOG Africa and African SPOs, ABCD will create, develop and provide open source materials for new and emerging technology specializing in the development of core Cardano blockchain technologies and applications. In both the immediate and long terms, ABCD will facilitate enhanced economic health in Africa while promoting an encouraging adoption of Cardano and blockchain technologies throughout the continent.
        </Paragraph>

        <Paragraph>
          These achievements will be self-reinforcing: by increasing the successful development of emerging businesses in the Cardano blockchain ecosystem, we will create value and new investment opportunities. By providing training, mentorship, shared space, and professional assistance, we will build a network of experts who will be able to share their expertise with additional developers. By incubating businesses, ABCD will move out into the community and contribute to the overall vitality, diversity, and growth of Cardano in the booming African economy.
        </Paragraph>

        <Paragraph>
          ABCD will provide an environment that allows Africans to take an active role in "growing their own" businesses that will lead to job creation. These new businesses and new jobs produced create wealth through multiplier effects that ultimately benefits the overall community beyond the individuals.
        </Paragraph>
        

    
      <div className={styles.header}></div>



      <section className="text-center md:p-20">
          <Heading1 className="text-5xl">MEET OUR FOUNDERS</Heading1>
          <div className="flex flex-col md:flex-row place-content-around">
            <div>
              <Image src="/josh2.jpg" width={290} height={260} className="rounded-full"/> 
              <Heading2>JOSHUA AKPAN</Heading2>
              <Paragraph>Founder, ABCD</Paragraph>
            </div>
            <div>
              <Image src="/gwendal.jpg" width={290} height={260} className="rounded-full"/> 
              <Heading2>GWENDAL LE DIVECHEN</Heading2>
              <Paragraph>Co- Founder & Comms , ABCD</Paragraph>
            </div>
          </div>
        </section>
      
        <div className="p-1 bg-blue-300 w-full bg-opacity-80 top-0 hover:bg-blue-100"></div>
        
        <section className="text-center p-2 md:p-20">
              <Heading1>ABCD COHORT 1</Heading1>
              <Heading2>Creating female tech leads in Africa</Heading2>
        </section>

    </div>
    </div>
  );
}

export default about;
