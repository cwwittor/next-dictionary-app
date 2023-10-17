import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <svg></svg>
        <div>
          <select>
            <option>Mono</option>
          </select>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <input type="text" placeholder="Search.." />
      <div>
        <div>
          <h1>Keyboard</h1>
          <span>/ki:bc:d/</span>
        </div>
        <a>Circle</a>
      </div>
      <span>Noun</span>
      <div>
        <h6>Meaning</h6>
        <div>
          <p>(etc.) a set of keys used to ...</p>
          <p>a component of many instruments including the piano organ</p>
          <p>a device with keys</p>
        </div>
      </div>
    </main>
  );
}
