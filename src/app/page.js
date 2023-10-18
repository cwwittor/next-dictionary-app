import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
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
          <h1 class="">Keyboard</h1>
          <span>/ki:bc:d/</span>
        </div>
        <a>Circle</a>
      </div>
      <span>Noun</span>
      <div>
        <h6>Meaning</h6>
        <div>
          <p>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </p>
          <p>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </p>
          <p>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </p>
        </div>
        <div>
          <span>Synonyms</span>
          <span>electronic keyboard</span>
        </div>
      </div>
      <span>verb</span>
      <div>
        <span>Meaning</span>
        <p>To type on a computer keyboard</p>
        <p>&quot;Keyboarding is the part of this job I hate the most.&quot;</p>
      </div>
      <br />
      <div>
        <span>Source</span>
        <span>https://en.wiktionary.org/wiki/keyboard</span>
      </div>
    </main>
  );
}
