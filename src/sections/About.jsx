import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('santosh.sujal23@vit.edu');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="Sujal-Thakur"
              className="w-3/4 sm:w-full h-auto object-cover rounded-lg border-2 border-gray-400 shadow-2xl"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Sujal Thakur</p>
              <p className="grid-subtext">
                I am a technologist, innovator, and full-stack developer, currently Co-founder & Principal Developer at
                Gigayouth Continuum. I specialize in MERN, Next.js, TypeScript, AWS, Docker, and Kubernetes, building
                scalable and AI-powered applications. My passion lies in solving real-world problems through
                cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work extensively with MERN (MongoDB, Express.js, React, Node.js), along with Next.js, TypeScript, and
                Tailwind CSS for modern web development. My expertise extends to AWS, Docker, and Kubernetes, ensuring
                scalable and efficient deployments.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible & Open to Opportunities</p>
              <p className="grid-subtext">
                Based in Pune, India, I am open to collaborations, hackathons, and innovative projects worldwide. I
                adapt seamlessly to different time zones and remote work environments.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                onClick={() => {
                  console.log('Contact Me button clicked. Opening mail client...');
                  window.open('mailto:santosh.sujal23@vit.edu', '_self');
                }}
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Code That Creates Impact</p>
              <p className="grid-subtext">
                Coding isn’t just my profession—it’s my passion. I thrive on building, innovating, and pushing
                boundaries with AI, ML, and AR-driven solutions. Every project I take on is a step towards shaping the
                future of technology.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  santosh.sujal23@vit.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
