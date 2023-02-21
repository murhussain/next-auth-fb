import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer 
      overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <div className='relative'>
        <Image
          className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
          src={profile}
          height={40}
          width={40}
          objectFit="cover"
          layout="fixed"
          alt=""
        />
        <Image
          className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
          src={src}
          height={100}
          width={100}
          alt=""
      />
      </div>
    </div>
  );
}

export default StoryCard;