function Header() {
  return (
    <header className="mb-8 text-slate-700 text-center">
      <h1 className="md:text-3xl lg:text-4xl my-8 font-extrabold">
        Task Manager
      </h1>

      <h2 className="md:text-2x lg_text-3xl mb-4 font-bold">
        {new Date().toLocaleDateString()}
      </h2>
    </header>
  );
}

export default Header;
