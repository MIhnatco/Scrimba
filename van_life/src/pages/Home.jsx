import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.5),transparent) bg-[url('assets/images/home-hero.png')] bg-no-repeat bg-cover bg-center text-white py-16 px-8">
      <h1 className="font-bold text-4xl my-8">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="text-xl my-8">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link
        to="vans"
        className="bg-[#ff8c38] inline-block text-center on-underline border-0 w-full mt-[27px] py-[0.75rem] text-white font-bold rounded-md Hover:cursor-pointer transition-transform duration-100 ease-in-out"
      >
        Find your van
      </Link>
    </main>
  );
}

export default Home;
