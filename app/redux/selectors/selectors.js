export function getGifsFromState(state) {
    return state.giphys.gifs;
}

export function getIsFetchingData(state) {
    return state.giphys.isFetchingData;
}

export function getHeadline(state) {
    return state.giphys.headline;
}

export function getGifById(id, state) {
    return state.giphys.gifs.find((gif)=> id === gif.id);
}