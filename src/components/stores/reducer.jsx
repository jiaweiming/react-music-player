// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
// 默认值
import defaultState from './state.jsx'

// 一个reducer就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
	// 不同的action有不同的处理逻辑
	switch (action.type) {
		case 'SET_PAGE_TITLE':
			return action.data;
		default:
			return state
	}
}


function infoList (state = defaultState.infoList, action) {
	switch (action.type) {
		case 'SET_INFO_LIST':
			return action.data;
		default:
			return state
	}
}

function songTitle (state = defaultState.playingSongTitle, action) {
	// 不同的action有不同的处理逻辑
	switch (action.type) {
		case 'SET_SONG_TITLE':
			return action.data;
		default:
			return state
	}
}


function songAvatar (state = defaultState.playingSongAvatar, action) {
	// 不同的action有不同的处理逻辑
	switch (action.type) {
		case 'SET_SONG_AVATAR':
			return action.data;
		default:
			return state
	}
}

function songIsPlaying (state = defaultState.animationPlayState, action) {
	// 不同的action有不同的处理逻辑
	switch (action.type) {
		case 'SET_SONG_PLAYING':
			return action.data;
		default:
			return state
	}
}

function songAuthor (state = defaultState.playingSongAuthor, action) {
	// 不同的action有不同的处理逻辑
	switch (action.type) {
		case 'SET_SONG_AUTHOR':
			return action.data;
		default:
			return state
	}
}



// 导出所有reducer
export default combineReducers({
	pageTitle,
	infoList,
	songTitle,
	songAvatar,
	songAuthor,
	songIsPlaying
})
