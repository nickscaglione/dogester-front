import $ from 'jquery';

const swipeLeft = function(){
  return({type: 'SWIPE', payload: ""})
}

const swipeRight = function(id){
  return function(dispatch){
    $.ajax({
      url: `https://localhost:8000/dogs/${id}`,
      type: 'PUT',
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data) {
      dispatch({type: 'SWIPE', payload: ""})
    })
  }
}

export { swipeLeft, swipeRight }
