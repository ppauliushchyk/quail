type Country = {
  /**
   * The name of the country (string).
   */
  code: string;
  /**
   * The ISO 3166-1 alpha-2 code of the country (string)
   */
  name: string;
};

/**
 * Fetches a list of countries filtered by code using a GraphQL query.
 *
 * @param {object} options - Options for filtering countries.
 * @param {string} options.q - The country code to filter by. It will be converted to uppercase
 * before being used in the query.
 * @returns {Promise<{ countries: Country[] }>} A promise that resolves to an object with a
 * `countries` {@link Country} property containing an array of countries.
 * @throws {Error} - If there is an error fetching the data or parsing the response.
 */
export async function readCountries({
  q,
}: {
  q: string;
}): Promise<{ countries: Country[] }> {
  const body = JSON.stringify({
    query: `{ countries(filter: { code: { regex: "^${(
      q || ""
    ).toUpperCase()}" } }) { name code } }`,
  });

  const response = await fetch("https://countries.trevorblades.com/graphql", {
    body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const { data } = await response.json();

  return data;
}
