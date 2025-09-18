export const SHEET_ID = "1qUnPrjzd_jDCV-arqkdEV6JP33Ix0s03cXD0VrO8IuY";
export const API_KEY = "AIzaSyBOtvQlgxFpvzPrdPJv2a_VDA6tQgXebNI";

export const loadSection = async (sectionName) => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sectionName}?key=${API_KEY}`
  );
  const data = await response.json();
  const rows = data.values;

  if (!rows || rows.length < 2) return [];

  const headers = rows[0];
  const items = rows.slice(1).map((row) =>
    Object.fromEntries(headers.map((key, i) => [key, row[i] || ""]))
  );

  return items;
};

export const getImageUrl = (id) => {
    return `https://drive.usercontent.google.com/download?id=${id}`;
}