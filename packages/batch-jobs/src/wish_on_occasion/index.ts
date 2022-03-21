import { resolve } from "path";
import { auth, sheets } from "@googleapis/sheets";

export async function test() {
  // Take fileName and spreadsheetId from ENV var.
  const fileName = "credentials.json";
  const spreadsheetId = "19MGG2sRXt-P9jiywCfneefC2finuDrrkaQbV3HdV_uU";
  const pathToKeyfile = resolve(__dirname, fileName);

  const googleAuth = new auth.GoogleAuth({
    keyFile: pathToKeyfile,
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/spreadsheets.readonly",
    ],
  });

  const client = await googleAuth.getClient();

  const instance = await sheets({
    version: "v4",
    auth: client,
  });
  const res = await instance.spreadsheets.values.get({
    auth: googleAuth,
    spreadsheetId,
    range: "Sheet1!A:Z",
  });
  let { values = [] } = res.data;
  if (values === null) {
    values = [];
  }
  const headers = values[0];
  const data = [];
  for (let i = 1; i < values.length; i++) {
    data.push(
      headers.reduce(
        (total, header, j) => ({
          ...total,
          [header]: values![i][j],
        }),
        {}
      )
    );
  }
  console.log(JSON.stringify(data, undefined, 1));
}
