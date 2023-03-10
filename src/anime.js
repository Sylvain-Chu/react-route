
export async function getAnimes() {
    const query = `
{Page(page: 1 perPage:30){
  media (season: WINTER, type: ANIME, seasonYear: 2023) {
    id
    title {
      romaji
      english
    }
    coverImage {
      large
    }
  }
}}
`;

    const url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
            })
        };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}



export async function getAnime( id ) {
    const query = `
query($id: Int) {
  Media(id: $id, type: ANIME) {
    id
    title {
      romaji
      english
    }
    coverImage {
      large
    }
  }
}
`;

    const variables = {
        $id: id
    }
    const url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.data.Media;
    } catch (error) {
        console.error(error);
    }
}

