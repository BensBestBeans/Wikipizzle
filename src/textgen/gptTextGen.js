import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import showdown from "showdown";

export async function generateMd(keyword) {
  const genNew = false;
  const properhard = true;

  const configuration = new Configuration({
    organization: "org-S8yfdGk3o3TVkUmV81AhuHAA",
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const base = `Article\n# ${keyword} \nFrom Wikipedia, the free encyclopedia\n\n`;

  if (genNew) {
    let promptstr = base + "**Contents**\n## Introduction\n##";
    let tokes = 40;

    if (properhard) {
      promptstr = base + "*Contents* [hide]\n## Introduction\n##";
      tokes = tokes * 4;
    }

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: promptstr,
      temperature: 0.8,
      max_tokens: tokes,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n\n"],
    });

    const rt = response.data["choices"][0]["text"];

    const contents = ("## Introduction\n##" + rt).split("\n");

    // contents = ['## Introduction', '## Early life and education', '## Business career', '## 2016 presidential campaign', '## Presidency', '## Political positions', '## Personal life']

    // print(contents)

    let done = base;

    // babbage
    // curie
    // davinci

    function trailing(st, n) {
      let words = st.split(" ");
      return words.slice(-n).reduce((acc, cur) => acc + " " + cur, "");
    }
    const ultrahard = true;
    if (ultrahard) {
      tokes = tokes * 3;
    }
    for (let part of contents) {
      let promptstr = trailing(done + "\n" + part + "\n", 1000);
      let tokens = tokes;
      if (tokes + promptstr.length > 4000) {
        tokes = 4000 - promptstr.length;
      }
      if (tokes >= 20) {
        let back = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: promptstr,
          temperature: 0.8,
          max_tokens: tokes * 3,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ["\n#"],
        });
        back = back.data["choices"][0]["text"];
        done = done + "\n" + part + "\n" + back + "\n\n";
      }
    }
    //console.log(done);

    if (fs.existsSync(keyword + ".md")) {
      fs.unlinkSync(keyword + ".md");
    }
    fs.writeFileSync(keyword + ".md", done);
    return done;
  } else if (!genNew) {
    return fs.readFileSync(keyword + ".md", "utf8");
  }
}

export async function generateHtml(keyword) {
  const text = await generateMd(keyword);
  const converter = new showdown.Converter();
  const html = converter.makeHtml(text);
  fs.writeFileSync(keyword + ".html", html);
}
