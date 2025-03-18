import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-gradient-to-t from-black-60 to-black-60 bg-center bg-no-repeat bg-cover min-h-[450px] text-white py-12 px-8 bg-[url('assets/images/home-hero.png')]">
      <h1 className="font-bold text-4xl my-8">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="text-xl my-8">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Link
        to="vans"
        className="inline-block text-center no-underline bg-[#FF8C38] border-md w-full mt-[27px] py-[0.75rem] text-white font-bold rounded hover:cursor-pointer transition-transform duration-100 ease-in-out"
      >
        Find your van
      </Link>
    </main>
  );
}

export default Home;
