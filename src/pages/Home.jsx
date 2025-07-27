import profilePic from '../assets/profile.png';
import leafVine from '../assets/leaf-vine.png'; 

export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-white text-gray-900 p-10 font-sans">
      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* profile + vine */}
        <div className="relative w-74 h-74">
          <img
            src={profilePic}
            alt="Aditi Singh"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
          <img
            src={leafVine}
            alt="Leaf vine overlay"
  className="absolute top-[-80px] left-[-30px] w-[300px] transform -rotate-6 opacity-90 z-20"
          />
        </div>

        {/* About text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-black mb-4">Aditi Singh</h1>
          <p className="text-lg text-gray-700 max-w-xl">
 Hello! <br />   <br />I am a PhD student in New York University's Cognition and Perception program.
            I joined the NEU lab in 2024 after completing my undergraduate degree from Princeton University with a major in 
            Computer Science and minors in Neuroscience, Cognitive Science, and Statistics and Machine Learning  in 2023. 
            My research background has primarily focused on human language processing—from both a neural and 
            computational perspective—and I am fascinated by how people communicate in naturalistic environments 
            with multiple languages and in multiple modalities. I have a keen interest in exploring the inherent 
            flexibility of our language system that allows us to learn new languages, concurrently process 
            multilingual, code-switched dialogue, and generalize newly learned concepts to new contexts. 
            
              <br />
                <br />
              In my free time, I love going to board game cafes, tap dancing, listening to musicals, and reading 
              books (& being disappointed by their movie adaptations). 
          </p>
        </div>
      </div>
    </main>
  );
}
