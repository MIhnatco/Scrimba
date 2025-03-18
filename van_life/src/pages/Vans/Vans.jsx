import React from "react";

function Vans() {
  const [vans, setVans] = React.useState([]);

  console.log(vans);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <>
      <h1>jhg</h1>
    </>
  );
}

export default Vans;
