// action也是函数
import $ from "jquery"

export function setPageTitle(data) {
	return (dispatch, getState) => {
		dispatch({
			type: 'SET_PAGE_TITLE',
			data: data
		})
	}
}

export function setInfoList(data) {
	return (dispatch, getState) => {
		$.ajax({
			type: "GET",
			url: "http://zhengjinwei.top:3003/list.json",
			dataType: "json",
			success: function (res) {
				dispatch({
					type: 'SET_INFO_LIST',
					data: res.music
				})
			}.bind(this)
		});
	}
}
