import API from '../../api/index'

const state = {
    songs: [],
    favorites: [],
    suggestions: []
};

const mutations = {
    ADD_SONGS(state, songs) {
        let newSongs = [...state.songs];
        songs.forEach(song => {
            if (!newSongs.find(e => e.id_track === song.id_track)) {
                newSongs.push(song)
            }
        });
        state.songs = newSongs
    },
    ADD_LYRICS(state, data) {
        const songs = [...state.songs];
        songs.forEach((item, i) => {
            if (item.id_track === data.id_track) songs[i].lyrics = data
        });
        state.songs = [...songs]
    },
    SET_SUGGESTIONS(state, songs) {
        state.suggestions = [...songs]
    },
    SET_FAVORITES(state, songs) {
        state.favorites = songs
    }
};

const actions = {
    searchSongs({commit}, terms) {
        API.music.get(`?q=${terms}&limit=10&type=track&lyrics=1`)
            .then(res => {
                if (res.data.success && res.data.result.length) {
                    commit('ADD_SONGS', res.data.result);
                    commit('SET_SUGGESTIONS', res.data.result);
                } else {
                    commit('SET_SUGGESTIONS', []);
                }
            })
            .catch(err => {
                console.log(`Error with the research ${terms}`, err);
                commit('SET_SUGGESTIONS', []);
            })
    },
    initSuggestions({commit}) {
        commit('SET_SUGGESTIONS', []);
    },
    getLyrics({commit}, song) {
        API.music.get(`artists/${song.id_artist}/albums/${song.id_album}/tracks/${song.id_track}/lyrics`)
            .then(res => {
                if (res.data.success && res.data.result && res.data.result.track) {
                    commit('ADD_LYRICS', res.data.result);
                }
            })
    },
    getFavorites({commit}) {
        let favorites = window.localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];
        favorites = favorites || [];
        commit('ADD_SONGS', favorites);
        commit('SET_FAVORITES', favorites);
    },
    updateFavorite({commit, state}, data) {
        let favorites = [...state.favorites];
        if (!data.isFavorite) {
            // On retire le son des favoris
            favorites = favorites.filter(e => e.id_track !== data.song.id_track)
        } else if (!state.favorites.find(e => e.id_track === data.song.id_track)) {
            // On ajoute le son aux favoris
            favorites.push(data.song);
        }
        commit('SET_FAVORITES', favorites);
        window.localStorage.setItem('favorites', JSON.stringify(favorites))
    }
};

const getters = {
    songs: state => state.songs,
    favorites: state => state.favorites,
    suggestions: (state) => state.suggestions,
};

const songs = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default songs;
