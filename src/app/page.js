import Image from "next/image";
import { darkMode } from "./index.js";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";

export default function Home() {
  return (
    <main class="container mx-auto">
      <div class="flex justify-around">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#838383"
            stroke-linecap="round"
            stroke-width="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <div class="flex gap-2 justify-evenly items-center">
          <select>
            <option>Mono</option>
          </select>
          <div class="vl"></div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="#838383"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center bg-white rounded-lg shadow-md">
        <input
          type="text"
          class="w-full px-4 py-2 rounded-l-lg focus:outline-none"
          placeholder="Search..."
        />
        <a href="#" class="flex items-center px-3 rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </a>
      </div>
      <div>
        <div>
          <h1 class="inter text-4xl font-semibold">keyboard</h1>
          <span class="sans purple">/ki:bc:d/</span>
        </div>
        <a>Circle</a>
      </div>
      <span class="">Noun</span>
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
