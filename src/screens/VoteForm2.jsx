import { useEffect } from "react";
import { React, useState } from "react";
import { ProcessVote } from "../scripts/backend";

export default function VoteForm2() {
  const [selected, setSelected] = useState("");

  return (
    <>
    <form onSubmit={() => {ProcessVote("SF Mayor", selected)}}>
      <label for="candidates">Choose a candidate:</label>
      <select id="candidates" name="candidates" onChange={(item) => {setSelected(item.target.value)}}>
      <option value=""> </option>
      <option value="London Breed">London Breed</option>
      <option value="Lebron James">Lebron James</option>
      <option value="Stephen Curry">Stephen Curry</option>
      <option value="Draymond Green">Draymond Green</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
    </>
  );
}