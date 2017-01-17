import $ from 'jquery';

const getDogs = function(){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:8000/dogs",
      type: 'GET'
    }).done(function(data) {
      dispatch({type: 'GET_DOGS', payload: data})
    })
  }
}

export { getDogs }
