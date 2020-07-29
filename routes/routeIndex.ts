import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  res.send(`
      <h1>Pošli prachy</h1>
      <form>
        <input id="input"/>
        <button onclick="onSubmit()" id="submitBtn" type="button">Submit 🐉</button>
        <div id="output"></div>
      </form>
      <script>
      const input = document.querySelector("#input");
      const output = document.querySelector("#output");

      function onSubmit(action) {
        fetch("/api/uppercase?text=" + (input.value || "")).then(
          (res) => {
            res.text().then((text) => {
              output.innerHTML = text;
            });
          }
        );
      }
    </script>
      `);
}
