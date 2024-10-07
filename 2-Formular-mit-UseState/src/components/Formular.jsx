import { useState } from "react";

export default function Formular(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function submit(event) {
    event.preventDefault();
    const details = {
      name,
      age,
    };
    props.setDetails(details);
  }

  return (
    <>
      <section>
        <h1>Formular mit useState</h1>
        <form onSubmit={submit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            name="Age"
            id="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
