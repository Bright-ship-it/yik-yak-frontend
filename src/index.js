const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")

postForm.addEventListener("submit", submitPost)

function submitPost(){
    event.preventDefault()
    console.log(postInput.value)
    const li = document.createElement('li')

    const p  = document.createElement('p')
    p.innerText = postInput.value
    li.appendChild(li)

    const commentForm = document.createElement('form')
    commentForm.innerHTML += `<input type="text"><input type="submit"`
}