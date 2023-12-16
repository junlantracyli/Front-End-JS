var originalLikeCount = [9,12,9];
var countElement = [
    document.querySelector("#user-count-1"),
    document.querySelector("#user-count-2"),
    document.querySelector("#user-count-3")
];

function addLike(id){
    originalLikeCount[id]++;
    countElement[id].innerText = originalLikeCount[id] + " likes";
}