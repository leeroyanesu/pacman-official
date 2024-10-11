import Section from "./Section";
import Heading from "./Heading";

const Services = () => {
  return (
    <Section id="about">
      <div className="container">
        <Heading
          title="About"
          text="PacStacks: Memetic Innovation in Stacks Blockchain"
        />
        <span className="text-lg tracking-wide">PacStacks is a meme coin that embraces the playful spirit of 
          cryptocurrency while innovating within the digital asset landscape. 
          Born from the meme culture, PacStacks combines community-driven enthusiasm 
          with technological advancement. Its ecosystem thrives on the principles of
           decentralization and inclusivity, offering a platform for users to engage
            in meme-inspired activities and transactions. Through its unique approach,
             PacStacks aims to redefine the boundaries of what a digital currency can
              achieve, fostering a vibrant community where creativity and collaboration
               reign supreme.</span>
        

      </div>
    </Section>
  );
};

export default Services;
