const api_key = "e70043efaf567cfdddee22aa0279fbe8";

const getBasics = async (request) => {
    const req = await fetch(`https://api.themoviedb.org/3${request}`)
    const json = await req.json();
    return json
};

export const getHomeList = async () => {
    return [
        {
            slug: "originals",
            title: 'Orinais Netflix',
            items: await getBasics(`/discover/tv?api_key=${api_key}&with_networks=213`)
        },
        {
            slug: "trending",
            title: 'Recomendados para você',
            items: await getBasics(`/trending/all/week?api_key=${api_key}`)
        },
        {
            slug: "toprated",
            title: 'Em Alta',
            items: await getBasics(`/movie/top_rated?api_key=${api_key}`)
        },
        {
            slug: "action",
            title: 'Ação',
            items: await getBasics(`/discover/movie?api_key=${api_key}&with_genres=28`)
        },
        {
            slug: "comedy",
            title: 'Comédia',
            items: await getBasics(`/discover/movie?api_key=${api_key}&with_genres=35`)
        },
        {
            slug: "horror",
            title: 'Terror',
            items: await getBasics(`/discover/movie?api_key=${api_key}&with_genres=27`)
        },
        {
            slug: "romance",
            title: 'Romance',
            items: await getBasics(`/discover/movie?api_key=${api_key}&with_genres=10749`)
        },
        {
            slug: "documentary",
            title: 'Documentários',
            items: await getBasics(`/discover/movie?api_key=${api_key}&with_genres=99`)
        },
    ]
};

export const getMovieInfo = async (movieId, type) => {
    let info = {};

    if(movieId) {
        switch(type) {
            case 'movie':
                info = await getBasics(`/movie/${movieId}?api_key=${api_key}`)
            break;
            case 'tv':
                info = await getBasics(`/tv/${movieId}?api_key=${api_key}`)
            break;
            default: 
                info = null
            break;
        }
    }
    return info
}
