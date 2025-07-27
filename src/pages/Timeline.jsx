import React from 'react';
import childPic from '../assets/child.png'
import estiLab from '../assets/esti_lab.png'
import uriLab from '../assets/uri_lab.png'
import andra from '../assets/andra.jpg'

const events = [
      {
    year: "2025",
    title: "Presenting at CogSci",
    description:
      "Going to San Francisco with Maya Taliaferro to present our paper about how bilinguals reconcile non-overlapping category boundaries across languages...and ways in which we can model this computationally.",
//     image: examplePic,
  },
  {
    year: "2024",
    title: "Started my PhD at New York University",
    description:
      "Joined Esti Blanco-Elorrieta's NEU lab in the Cognition and Perception program at NYU.",
     image: estiLab,
  },
    {
    year: "2023",
    title: "Joined Bloomberg",
    description:
      "Worked at Bloomberg as a software engineer in the Multi-Asset Risk System (MARS) team.",
  },
  {
    year: "2023",
    title: "Graduated from Princeton",
    description:
      "Majored in Computer Science with minors in Neuroscience, Cognitive Science, and Statistics and Machine Learning. Wrapped up my thesis on multimodal language embeddings using the Whisper model.",
  },
    {
    year: "2021",
    title: "Joined Uri Hasson's Lab",
    description:
      "Started working with Uri Hasson, Ariel Goldstein, Zaid Zada, Bobbi Aubrey, Leo Niekerken, Ken Wang, and Harsha Gazula on modeling ECoG data of naturalistics conversations using large language models like GPT-2 and Whisper.",
      image: uriLab
  },

      {
    year: "2020",
    title: "Joined Tom Griffith's  Computational Cognitive Science Lab",
    description:
      "Started working with Tom Griffiths and Ishita Dasgupta: researching how LSTMs can learn compositionality and infer meaning from context by augmenting its training data with minimal pairs examples.",
  },
    {
    year: "2017",
    title: "Joined Wei Ji Ma's Lab",
    description:
      "Started working with Wei Ji Ma and Andra Mihali, analyzing human behavior in a visual short-term memory task by creating computational models with a resource-limited encoding stage and a Bayesian decision rule.",
      image: andra,
  },

    {
    year: "The Early Years",
    title: "",
    description: "Causing mayhem and pretending to read textbooks since 2001.",
    image:  childPic,
  },
];

export default function Timeline() {
  return (
    <main className="pt-32 min-h-screen bg-white text-gray-900 p-10 font-sans">
      <h1 className="text-4xl font-bold text-sky-800 mb-4">Over the Years...</h1>
      <div className="relative border-l-4 border-sky-500 pl-6 space-y-10">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-sky-600 rounded-full border-4 border-white shadow-md" />
            <div className="ml-6">
              <h2 className="text-xl font-semibold text-black">
                {event.year} — {event.title}
              </h2>
              <p className="text-gray-700 mt-2">{event.description}</p>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="mt-3 w-64 rounded shadow"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

