"use client";
import Image from "next/image";
// import { useEffect, useState } from "react";

// import { useClient } from "react";
import { darkMode } from "./index.js";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";

import { useEffect, useState } from "react";

// import WordDefinition from "./worddefinition.js";
import DictionaryHelp from "./dictionaryHelp.js";

const searchCache = {};

export default function Home() {
  // const [selectedFont, setSelectedFont] = useState("inter");

  const [searchValue, setSearchValue] = useState("");

  const [elementsString, setElementsString] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    if (!!searchValue) {
      try {
        // Check if the search term is in the cache
        if (searchCache.hasOwnProperty(searchValue)) {
          // Use the cached result
          const updatedElementsString = searchCache[searchValue];
          setElementsString(updatedElementsString);
        } else {
          // Call the `DictionaryHelp` function with the updated search value
          const updatedElementsString = await DictionaryHelp(
            searchValue,
            handlePlayAudio // Pass handlePlayAudio as a prop
          );

          // Update the cache
          searchCache[searchValue] = updatedElementsString;

          // Update the state with the elements string
          setElementsString(updatedElementsString);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const updatedElementsString = await DictionaryHelp(
        "example",
        handlePlayAudio // Pass handlePlayAudio as a prop
      );

      setElementsString(updatedElementsString);
    }
  };

  function handlePlayAudio() {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission

    // Perform search operation
    fetchData();
  };

  // const playButton = document.getElementById("playButton");
  // const audioPlayer = document.getElementById("audioPlayer");

  // playButton.addEventListener("click", () => {
  //   audioPlayer.play(); // Play the audio
  // });

  return (
    <main
      className={`max-w-xs bg-cover	container font-inconsolata ${
        darkMode ? "dark" : ""
      }`}
      style={{
        margin: "0 auto",
      }}
    >
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
            <option>Inter</option>
            <option>Inter</option>
          </select>
          <div class="vl"></div>
          <label class="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
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
      <div class="flex items-center bg-white rounded-lg shadow-md my-4">
        <form
          class="flex justify-between flex-shrink-0 w-full"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            class="px-4 py-2 rounded-l-lg focus:outline-none flex-grow"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type="submit"
            class="flex items-center px-3 rounded-r-lg"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </form>
      </div>
      <div dangerouslySetInnerHTML={{ __html: elementsString }} />
      <br />
      <div>
        <p class="grey underline text-sm">Source</p>
        <a
          class="flex items-center text-sm"
          href="https://https://en.wiktionary.org/wiki/keyboard"
        >
          <span>https://en.wiktionary.org/wiki/keyboard&#xFEFF;</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}
