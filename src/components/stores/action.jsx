import _http from '../../components/ajax/ajax.js'

export function setPageTitle(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_PAGE_TITLE',
      data: data
    })
  }
}

export function setSongTitle(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SONG_TITLE',
      data: data
    })
  }
}

export function setCollectionList(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_COLLECTION_LIST',
      data: data
    })
  }
}

export function setSongAvatar(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SONG_AVATAR',
      data: data
    })
  }
}

export function setSongIsPlaying(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SONG_PLAYING',
      data: data
    })
  }
}

export function setSongAuthor(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SONG_AUTHOR',
      data: data
    })
  }
}

export function setSongUrl(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SONG_URL',
      data: data
    })
  }
}


export function setInfoList(data) {
  return (dispatch, getState) => {
    const dataUrl = "/list.json";
    _http.get(dataUrl).then((res) => {
      dispatch({
        type: 'SET_INFO_LIST',
        data: res.data.music
      });
    }).catch(function (error) {
      console.log(error)
    })
  }
}
