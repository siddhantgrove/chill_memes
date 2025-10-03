import { useState } from "react";
import Swal from "sweetalert2";

export default function MemeBox() {
  const [currentMeme, setCurrentMeme] = useState(null);

  // Your custom meme data
  const memeImage = "https://i.pinimg.com/736x/b6/a6/56/b6a65628d04f8b580f0ff26b0dc6c27b.jpg";
  const ravanmeme = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/pjimage-2-1587278030.jpg";
  const Ajaydevgan = "https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/03/The-Ajay-Devgan-Meme-1.jpg";
  const Poop = "https://assets-global.website-files.com/65d7bd08157fd9124491bd91/65d7bd08157fd9124491bffb_funnypoopingmemes.jpg";
  const gandhi = "https://preview.redd.it/us4zwtstdj1d1.png?width=1080&crop=smart&auto=webp&s=1439078247fd93fcb904c1f0cfb188c7bcc4292b";

  return (


    <div 
  className="flex flex-col items-center p-6 gap-3 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('https://wallpaperaccess.com/full/1137909.jpg')" }} >
                                                                                     
    <div className="flex flex-col items-center p-6 gap-3">

      <button
        onClick={() => setCurrentMeme(memeImage)}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
        Mahtma gandhi special 😂
      </button>

      <button
        onClick={() => setCurrentMeme(ravanmeme)}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
      Ravan special 😂 
      </button>

      <button
        onClick={() => setCurrentMeme(Ajaydevgan)}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
        Ajay devgan special😂
      </button>

      <button
        onClick={() => setCurrentMeme(Poop)}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
    Serious bat ki charcha 😂
      </button>

      <button
        onClick={() => setCurrentMeme(gandhi)}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
   Dark as fuck 😂
      </button> <br />
      
      <button className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
       onClick={()=> Swal.fire("BAs kar ba dalla ab kya meme he dheka ga🤡")}>
        CLICK For More </button>



      {/* Meme display area */}
      {currentMeme && (
        <div className="mt-6 relative w-auto h-80 border rounded-lg overflow-hidden shadow-lg">
          
          <img
            src={currentMeme}
            alt="meme"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
    </div>
  );
}

