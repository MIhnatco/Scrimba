import React from "react";

function Vans() {
  const [vans, setVans] = React.useState([]);

  console.log(vans);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/api/vans", { signal })
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));

    //abort API call
    return () => controller.abort();
  }, []);
  return (
    <>
      <h1>{vans[0].name}</h1>
    </>
  );
}

export default Vans;
