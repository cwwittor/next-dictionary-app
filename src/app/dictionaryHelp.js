async function getData(query, handlePlayAudio) {
  const staticData = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
    { cache: "no-store" }
  );

  if (!staticData.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await staticData.json();
  // console.log(data[0].meanings);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  let htmlString = "";

  console.log(data[0]);

  htmlString += `<div class="flex justify-between">
  <div>
    <h1 class="text-4xl font-semibold">${data[0].word}</h1>
    <span class="sans purple">/${data[0].phonetic}/</span>
  </div>
  <a id="playButton" onClick={handlePlayAudio}>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="75"
  height="75"
  viewBox="0 0 75 75"
>
  <g fill="#A445ED" fill-rule="evenodd">
    <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
    <path d="M29 27v21l21-10.5z" />
  </g>
    </svg>
        <audio id="audioPlayer" src="//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"></audio>
      </a>

</div>`;

  data[0].meanings.forEach((word) => {
    htmlString += `<div class="flex items-center">
    <span class="text-lg font-bold italic mr-4">${word.partOfSpeech}</span>
    <hr class="flex-grow border-t border-gray-300" />
  </div>
  <div>
    <h6 class="grey text-base">Meaning</h6>
    <div>
      <ul class="marker:text-green list-outside list-disc pl-3">`;

    word.definitions.forEach((meaning) => {
      // Generate HTML syntax using meaning's definition
      let meaningHtml = `<li class="purple pl-3">
      <div class="black">
        ${meaning.definition}
      </div>
    </li>`;

      // Append to the HTML string
      htmlString += meaningHtml;
    });

    htmlString += `</ul>
    </div>
    <div>
      <span>Synonyms </span>`;

    if (word.synonyms.length > 0) {
      word.synonyms.forEach((synonym, index) => {
        htmlString += `<span class="purple">${synonym}</span>`;
        if (index < word.synonyms.length - 1) {
          htmlString += ", ";
        }
      });
    }
    htmlString += `</div>
  </div>`;
  });

  return htmlString;

  // return `<div>${JSON.stringify(data[0].meanings)}</div>`;
}

export default getData;
