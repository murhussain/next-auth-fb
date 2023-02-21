import StoryCard from "./story-card";



const stories = [
  // {
  //   name: "Jeff Bezoz",
  //   src: "https://links.papareact.com/zof",
  //   profile: "https://links.papareact.com/l4v",
  // },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Harry Potter",
    src: "https://links.papareact.com/6gg",
    profile: "https://links.papareact.com/r57",
  },
  {
    name: "The Queen",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  }
];


function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          profile={story.profile}
          src={story.src}
        />
      ))}
    </div>
  );
}

export default Stories;