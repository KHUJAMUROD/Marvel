class MarvelService {
    getResource =  async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.Resource('https://gateway.marvel.com:443/v1/public/characters?apikey=b5fd43db5be36af75c1c848fccda6094');
    }

}