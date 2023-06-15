import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ data }: any) => {
  const { title, src } = data;
  return (
    <div className="text-center rounded-md relative overflow-hidden cursor-pointer">
      <Image
        src={src}
        alt="Recipe Name"
        width={250}
        height={250}
        className="w-full"
      />
      <div className="absolute bottom-0 w-full p-5 bg-black/60">
        <h2 className="text-3xl uppercase truncate font-bold">{title}</h2>
        <Link href="#" className="btn btn-primary inline-block mt-5">
          See Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
