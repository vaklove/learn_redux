//increment 
function increment(index) {
    return {
        type:'INCREMENT_LIKES',
        index
    }
}

//add comment
function addComment(postId,authors,comment) {
    return {
    return :'ADD_COMMENT',
    postId,
    authors,
    comment

    }    
}
    
//remove comment

function  removeComment(postId,i)
{
    return{
        type:'REMOVE_COMMNET' ,
        i,
        postId

    }
}