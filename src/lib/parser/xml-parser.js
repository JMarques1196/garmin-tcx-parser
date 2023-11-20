import { url } from "../../config/config";

async function fetchUrl() {
  const response = await fetch(url); // Fetch tcx file from provided url
  const data = await response.text();

  return data;
}

export function returnUrl(metric) {
  let i = fetchUrl(metric).then((data) => {
    //Parse received data
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/xml");
    let filterByMetric = doc.querySelectorAll(metric);
    let parsedData = [];

    for (let i = 0; i < filterByMetric.length; i++) {
      parsedData[i] = filterByMetric[i].textContent
        .replace(/[\n\r]+|[\s]{2,}/g, " ") // regex for removing spaces or new lines
        .trim();
    }
    return parsedData;
  });
  return i;
}
